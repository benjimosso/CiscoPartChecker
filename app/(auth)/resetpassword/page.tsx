'use client'
import React, { useState } from "react";
import { createClient } from "@/utils/supabase/client";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function ResetPassword() {
    const [error, setError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)
    const [emailSent, setEmailSent] = useState('')

    const validateEmail = (email: string): string | null => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        
        if (!email.trim()) {
            return 'Email is required'
        }
        
        if (!emailRegex.test(email)) {
            return 'Please enter a valid email address'
        }
        
        return null
    }

    const sendPasswordReset = async (formData: FormData) => {
        setIsLoading(true)
        setError('')
        setSuccess(false)

        try {
            // Extract and validate email
            const email = formData.get('email')
            
            if (!email || typeof email !== 'string') {
                setError('Email is required')
                return
            }

            // Validate email format
            const validationError = validateEmail(email)
            if (validationError) {
                setError(validationError)
                return
            }

            const supabase = createClient()
            
            // Optional: Check if user exists (SECURITY CONSIDERATION!)
            // const { data: userCheck } = await supabase
            //     .from('auth.users')
            //     .select('email')
            //     .eq('email', email)
            //     .single()
            
            // if (!userCheck) {
            //     setError('No account found with this email address')
            //     return
            // }

            const { data, error: supabaseError } = await supabase.auth.resetPasswordForEmail(email, {
                redirectTo: `${window.location.origin}/confirm?next=/updatepassword`
            })

            if (supabaseError) {
                console.log(supabaseError)
                setError(supabaseError.message)
                return
            }

            // Success - show confirmation
            setSuccess(true)
            setEmailSent(email)
            
        } catch (error) {
            console.error('Unexpected error:', error)
            setError('An unexpected error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50 dark:bg-gray-950">
        <div className="mx-auto w-full max-w-md space-y-6">
            <div>
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    {success ? 'Check your email' : 'Forgot your password?'}
                </h2>
                <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
                    {success 
                        ? `We've sent a password reset link to ${emailSent}`
                        : "Enter your email and we'll send you a reset link."
                    }
                </p>
            </div>

            {!success ? (
                <form className="space-y-4" action={sendPasswordReset}>
                    <div>
                        <Label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email address
                        </Label>
                        <Input 
                            id="email" 
                            name="email" 
                            type="email" 
                            autoComplete="email" 
                            required 
                            placeholder="Enter your email address"
                            disabled={isLoading}
                        />
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading}>
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                                Sending reset link...
                            </div>
                        ) : (
                            'Send reset link'
                        )}
                    </Button>
                </form>
            ) : (
                <div className="space-y-4">
                    <div className="rounded-md bg-green-50 border border-green-200 p-6 text-center">
                        <div className="flex justify-center mb-3">
                            <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                <span className="text-green-600 text-xl">📧</span>
                            </div>
                        </div>
                        <h3 className="text-lg font-medium text-green-800 mb-2">
                            Reset link sent!
                        </h3>
                        <p className="text-sm text-green-700">
                            Check your inbox and click the link to reset your password. 
                            The link will expire in 24 hours.
                        </p>
                    </div>
                    
                    <div className="text-center">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                            Didn't receive the email? Check your spam folder or try again.
                        </p>
                        <Button 
                            variant="outline" 
                            onClick={() => {
                                setSuccess(false)
                                setEmailSent('')
                            }}
                            className="w-full"
                        >
                            Send another reset link
                        </Button>
                    </div>
                </div>
            )}

            {/* Error Message */}
            {error && (
                <div className="rounded-md bg-red-50 border border-red-200 p-4">
                    <div className="flex items-center">
                        <span className="text-red-600 mr-2">✗</span>
                        <p className="text-sm text-red-800">{error}</p>
                    </div>
                </div>
            )}

            <div className="flex justify-center pt-4">
                <Link
                    href="/login"
                    className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50 flex items-center gap-1"
                    prefetch={false}
                >
                    ← Back to login
                </Link>
            </div>
        </div>
    </div>
  )
}
