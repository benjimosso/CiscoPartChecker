"use client";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import AuthForm from "../AuthForm";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Singup() {
  const router = useRouter();
  const [error, setError] = useState(null);

  const handleSubmit = async (e, email, password) => {
    e.preventDefault();
    // console.log("Email: ", email, "Password: ", password);
    const supabase = createClientComponentClient();
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/api/auth/callback`,
      },
    });

    if (error) {
      setError(error.message);
      return;
    }

    if (!error) {
      router.push("/verify");
    }
  };

  return (
    <div className="flex-1 flex items-center flex-col">
      <h1 className="text-2xl pb-4 font-bold">Signup</h1>
      <AuthForm handleSubmit={handleSubmit} />
      {error && <p>{error}</p>}
    </div>
  );
}
