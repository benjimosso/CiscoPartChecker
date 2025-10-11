import React from "react";
import { createClient } from "@/utils/supabase/server";
import { Label } from "@/components/ui/label"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { redirect } from "next/navigation";

export default function ResetPassword() {
interface ResetPasswordResult {
    success?: string;
    error?: string;
}

const sendPasswordReset = async (formData: FormData): Promise<ResetPasswordResult> => {
    'use server'
    const supabase = await createClient();
    console.log(formData.get('email'))
    const email = formData.get('email') as string;

    const { data, error } = await supabase.auth.resetPasswordForEmail(email);

    if (error) {
        console.log(error);

        return {
            success: "",
            error: error.message,
        };
    }

    if (data) {
        redirect('/')
    }
    
    return { success: "Reset password email sent" };
};

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50  dark:bg-gray-950">
        <div className="mx-auto w-full max-w-md space-y-4">
            <div>
                <h2 className="text-center text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
                    Forgot your password?
                </h2>
                <p className="mt-1 text-center text-sm text-gray-600 dark:text-gray-400">
                    Enter your email and we'll send you a reset link.
                </p>
            </div>
            <form className="space-y-4" action={sendPasswordReset}>
                <div>
                    <Label htmlFor="email" className="sr-only">
                        Email address
                    </Label>
                    <Input id="email" name="email" type="email" autoComplete="email" required placeholder="Email address" />
                </div>
                <Button type="submit" className="w-full">
                    Reset password
                </Button>
            </form>
            <div className="flex justify-center pt-1">
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
