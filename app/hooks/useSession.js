
import { useEffect, useState } from "react";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";


export default function useSession() {
    const [session, setSession] = useState(null); // null is the initial value

    useEffect(() => {
        const supabase = createClientComponentClient();
        const { data: session, error } = supabase.auth.getSession();
        if (error) {
            console.error("Error fetching session from Supabase: ", error);
        }
        setSession(session);

    }, []);
    console.log("Session: ", session);
    return session;
}