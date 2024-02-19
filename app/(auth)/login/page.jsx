'use client'
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Login() {

    const router = useRouter();
    const [error, setError] = useState(null);

    const handleSubmit = async (e, email, password) => {
        e.preventDefault();
        const supabase = createClientComponentClient();
        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        if (error) {
            setError(error.message);
            return;
        }

        if (!error) {
            router.push("/");
        }
    };


  return (
    <div className="flex-1 flex items-center flex-col">
      <h2 className="text-2xl pb-4 font-bold">Login</h2>
        <AuthForm handleSubmit={handleSubmit} />
        {error && <p>{error}</p>}
    </div>
  )
}
