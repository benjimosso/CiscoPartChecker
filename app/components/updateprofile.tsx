"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { Profiles } from "@/app/lib/interfaces";
// supabase instance.
import { createClient } from "@/utils/supabase/client";
// shadcn
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function UpdateProfile({ profile }: { profile: Profiles }) {
  const router = useRouter();
  const [username, setUsername] = React.useState(profile.username);
  const [about, setAbout] = React.useState(profile.about);




  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // this if condition is to prevent empty strings from being sent to the database. DOES NOT SEEM RIGHT!!!!
    if (username === "") {
      setUsername(profile.username);
    }
    if (about === "") {
      setAbout(profile.about);
    }
    const supabase = createClient();
    
    // const { data, error } = await supabase
    //   .from("profiles")
    //   .update({ username, about })
    //   .eq("id", profile.id)
    //   .select();

    // if (error) {
    //   console.log("error", error);
    // }
    // if (data) {
    //   console.log("data", data);
    //   router.refresh();
    // }
  };

  return (
    <div className="w-4/5">
      <Card className="m-14 border border-primary">
        <CardHeader className="flex items-center">
          <CardTitle>Update Profile</CardTitle>
        </CardHeader>

        <CardContent>
          <form onSubmit={(e) => handleSubmit(e)}>
            <div className="flex">
            <div className="flex flex-col space-y-5 w-2/5 border-r-2 border-primary p-4">
              <div className="space-y-4">
                <h2>
                  Username:
                </h2>
                <Input
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="username"
                  className=""
                />
              </div>
              <div className="space-y-4">
                <h2>About</h2>
                <Textarea
                  placeholder="Write something about yourself"
                  className=""
                  onChange={(e) => setAbout(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flex-col space-y-5 ml-6 p-3">
                <div>
                    <h2>Profile Picture</h2>
                    
                </div>
                <Input 
                type="file"
                className="border border-primary p-2"
                accept="image/*"
                
                />
            </div>
            </div>
            <Button className="mt-6" type="submit">
              Update
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
