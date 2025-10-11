'use client'
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { useState } from "react";



export default function UpdatePassword() {

    const [passError, setPassError] = useState('')
    const [isLoading, setIsLoading] = useState(false)
    const [success, setSuccess] = useState(false)

    const validatePassword = (password: string): string | null => {
        if (password.length < 8) {
            return 'Password must be at least 8 characters long'
        }
        if (!/(?=.*[a-z])/.test(password)) {
            return 'Password must contain at least one lowercase letter'
        }
        if (!/(?=.*[A-Z])/.test(password)) {
            return 'Password must contain at least one uppercase letter'
        }
        if (!/(?=.*\d)/.test(password)) {
            return 'Password must contain at least one number'
        }
        return null
    }

    const setNewPassword = async (formData: FormData) => {
        setIsLoading(true)
        setPassError('')
        setSuccess(false)

        try {
            // Extract and validate password
            const newPassword = formData.get('password')
            
            if (!newPassword || typeof newPassword !== 'string') {
                setPassError('Password is required')
                return
            }

            // Validate password strength
            const validationError = validatePassword(newPassword)
            if (validationError) {
                setPassError(validationError)
                return
            }

            const supabase = createClient()
            const { data, error } = await supabase.auth.updateUser({ password: newPassword })

            if (error) {
                console.log(error)
                setPassError(error.message)
                return
            }

            if (data) {
                setSuccess(true)
                // Redirect after showing success message for 2 seconds
                setTimeout(() => {
                    redirect('/')
                }, 2000)
            }
        } catch (error) {
            console.error('Unexpected error:', error)
            setPassError('An unexpected error occurred. Please try again.')
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50  dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-4">
                <form className="space-y-4" action={setNewPassword}>
                    <div>
                        <Label htmlFor="password" className="block text-sm font-medium mb-2">
                            New Password
                        </Label>
                        <Input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autoComplete="new-password" 
                            required 
                            placeholder="Enter your new password"
                            disabled={isLoading || success}
                        />
                        <div className="mt-2 text-xs text-gray-600 dark:text-gray-400">
                            <p>Password must contain:</p>
                            <ul className="list-disc list-inside mt-1 space-y-1">
                                <li>At least 8 characters</li>
                                <li>One uppercase letter</li>
                                <li>One lowercase letter</li>
                                <li>One number</li>
                            </ul>
                        </div>
                    </div>
                    <Button type="submit" className="w-full" disabled={isLoading || success}>
                        {isLoading ? (
                            <div className="flex items-center gap-2">
                                <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                                Updating...
                            </div>
                        ) : success ? (
                            <div className="flex items-center gap-2">
                                <span className="text-green-600">✓</span>
                                Password Updated!
                            </div>
                        ) : (
                            'Confirm'
                        )}
                    </Button>
                </form>
                
                {/* Success Message */}
                {success && (
                    <div className="rounded-md bg-green-50 border border-green-200 p-4">
                        <div className="flex items-center">
                            <span className="text-green-600 mr-2">✓</span>
                            <p className="text-sm text-green-800">
                                Password updated successfully! Redirecting to home page...
                            </p>
                        </div>
                    </div>
                )}

                {/* Error Message */}
                {passError && (
                    <div className="rounded-md bg-red-50 border border-red-200 p-4">
                        <div className="flex items-center">
                            <span className="text-red-600 mr-2">✗</span>
                            <p className="text-sm text-red-800">{passError}</p>
                        </div>
                    </div>
                )}

                <div className="flex justify-center pt-4">
                    <Link
                        href="/login"
                        className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                        prefetch={false}
                    >
                        Back to login
                    </Link>
                </div>
            </div>
        </div>
    )
}
