import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { createClient } from "@/utils/supabase/server";
import Link from "next/link";
import { redirect } from "next/navigation";



export default function UpdatePassword() {

    const setNewPassword = async (formData: FormData) => {
        'use server'

        const supabase = await createClient();
        const newPassword = formData.get('password') as string
        const { data, error } = await supabase.auth.updateUser({ password: newPassword })

        if (error) {
            console.log(error)

            return {
                success: "",
                error: error.message,
            };
        }

        if (data) {
            console.log(data)

            redirect('/')
        }

    }

    return (
        <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50  dark:bg-gray-950">
            <div className="mx-auto w-full max-w-md space-y-4">
                <form className="space-y-4" action={setNewPassword}>
                    <div>
                        <Label htmlFor="password" className="sr-only">
                            New Password
                        </Label>
                        <Input id="password" name="password" type="password" autoComplete="password" required placeholder="new password" />
                    </div>
                    <Button type="submit" className="w-full">
                        Confirm
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
