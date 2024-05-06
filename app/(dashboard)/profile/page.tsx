import React from "react";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Profiles } from "@/app/lib/interfaces";
import Link from "next/link";

// shadcn
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import { Input } from "@/components/ui/input"
import { DropdownMenuTrigger, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuItem, DropdownMenuContent, DropdownMenu } from "@/components/ui/dropdown-menu"
import { CardTitle, CardDescription, CardHeader, CardContent, CardFooter, Card } from "@/components/ui/card"

async function getProfile() {
  const supabase = createServerComponentClient({ cookies });
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*")
    .single();

  if (error) console.log("error", error);
  return (profile as Profiles) || null;
}

export default async function Profile() {
  const profile = await getProfile();
  if (profile) {
    console.log(profile.first_name);
  }

  // check if the user is logged in, if not, return a message (could be done down below as well)
  if (!profile) {
    return (
      <div>
        <h1>Please login to see your profile.</h1>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen w-full flex-col items-center mt-20">
        {/* <nav className="hidden  font-medium md:flex md:flex-row md:items-center md:text-sm ">
        <h1 className="font-mono text-3xl">Profile Settings</h1>
        </nav> */}
        <main className="flex min-h-[calc(100vh_-_theme(spacing.16))] flex-1 flex-col gap-4 bg-muted/40 p-4 md:gap-8 md:p-10">
        <div className="mx-auto grid w-full max-w-6xl gap-2">
          <h1 className="text-3xl font-semibold">Settings</h1>
        </div>
        <div className="mx-auto grid w-full max-w-6xl items-start gap-6 md:grid-cols-[180px_1fr] lg:grid-cols-[250px_1fr]">
          <nav className="grid gap-4 text-sm text-muted-foreground" x-chunk="dashboard-04-chunk-0">
            {/* <Link className="font-semibold text-primary" href="#">
              General
            </Link>
            <Link href="#">Security</Link>
            <Link href="#">Integrations</Link>
            <Link href="#">Support</Link>
            <Link href="#">Organizations</Link>
            <Link href="#">Advanced</Link> */}
          </nav>
          <div className="grid gap-6">
            <Card x-chunk="dashboard-04-chunk-1">
              <CardHeader>
                <CardTitle>Username</CardTitle>
                <CardDescription>Your Username</CardDescription>
              </CardHeader>
              <CardContent>
                <h2 className="font-semibold"> {profile.username}</h2>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Sheet>
                    <SheetTrigger className="bg-primary text-white p-3 rounded-md"> Change </SheetTrigger>
                    <SheetContent side="right">
                      <Input placeholder="New Username" />
                      <Button className="mt-3">Save</Button>
                    </SheetContent>
                </Sheet>
                
              </CardFooter>
            </Card>
            <Card x-chunk="dashboard-04-chunk-2">
              <CardHeader>
                <CardTitle>Plugins Directory</CardTitle>
                <CardDescription>The directory within your project, in which your plugins are located.</CardDescription>
              </CardHeader>
              <CardContent>
                <form className="flex flex-col gap-4">
                  <Input defaultValue="/content/plugins" placeholder="Project Name" />
                  <div className="flex items-center space-x-2">
                    
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="include"
                    >
                      Allow administrators to change the directory.
                    </label>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="border-t px-6 py-4">
                <Button>Save</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
