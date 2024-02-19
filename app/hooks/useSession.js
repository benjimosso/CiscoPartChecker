
import { useEffect, useState } from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

export default function useSession() {
    const [session, setSession] = useState(null); // null is the initial value

    useEffect(() => {
        const supabase = createServerComponentClient({cookies});
        const { data: session, error } = supabase.auth.getSession();
        if (error) {
            console.error("Error fetching session from Supabase: ", error);
        }
        setSession(session);

    }, []);
    console.log("Session: ", session);
    return session;
}