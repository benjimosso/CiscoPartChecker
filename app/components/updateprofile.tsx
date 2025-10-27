"use client";
import React from "react";
import { useState } from "react";
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
import { Repeat } from "lucide-react";

export default function UpdateProfile({ profile }: { profile: Profiles }) {
  if (!profile) {
    return <div>
      <h1>Something went wrong retriving your profile.</h1>
    </div>
  }

  const router = useRouter();
  const [username, setUsername] = useState(profile.username);
  const [about, setAbout] = useState(profile.about);
  const [file, setFile] = useState(null)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [avatarUrl, setAvatarUrl] = useState(null)




  const handleSubmit = async (e: React.FormEvent) => {
    setIsLoading(true)
    e.preventDefault();
    try {
      //supabase instance.
      const supabase = createClient();

      if (username === null || username === "") {

        setUsername(profile.username);
        console.log("worked: ", username)
      }
      if (about === null || about === "") {
        // console.log("+".repeat(50))
        // console.log(about)
        setAbout(profile.about);
      }

      // Determine the avatar URL to use
      let finalAvatarUrl = profile.avatar; // Default to existing avatar

      const maxFileSize = 5242880 // 5MB
      if (file) {
        if (file.size > maxFileSize) {
          setError("file is too large, make sure your file is smaller than 5mb")
          return
        } else {
          setError('')
          const fileName = file.name
          const filePath = `private/${fileName}`
          const { data: fileUploaded, error: uploadEror } = await supabase.storage.from('Avatars').upload(filePath, file)
          if (uploadEror) {
            setError(String(uploadEror))
            setFile(null)
            setAbout('')
            setUsername('')
            return
          }
          if (fileUploaded) {
            const imagePath = fileUploaded.path
            console.log(imagePath)
            const { data: publicAvatarUrl } = supabase.storage.from('Avatars').getPublicUrl(`${imagePath}`);
            if (publicAvatarUrl.publicUrl) {
              console.log("Public URL generated:", publicAvatarUrl.publicUrl)
              finalAvatarUrl = publicAvatarUrl.publicUrl; // Use the new uploaded URL
              setAvatarUrl(publicAvatarUrl.publicUrl); // Also update state for UI
              console.log("Avatar URL state should be set to:", publicAvatarUrl.publicUrl)
            } else {
              throw new Error("There was an issue getting your avatar URL");
            }
          }
        }
      }

      // Build update payload with the correct avatar URL
      const updatePayload: any = { username, about };
      if (finalAvatarUrl) {
        updatePayload.avatar = finalAvatarUrl;
      }

      console.log("Avatar before update: ", updatePayload.avatar)
      const { data, error } = await supabase
        .from("profiles")
        .update(updatePayload)
        .eq("id", profile.id)
        .select();


      if (error) {
        console.log("error", error);
      }
      if (data) {
        console.log("+".repeat(20))
        console.log("DATA: ", data)
        console.log("+".repeat(20))
        router.refresh()
      }
    } catch (error) {
      setError(error instanceof Error ? error.message : String(error));
    } finally {
      setIsLoading(false)
    }
  }

  // Debug logging, remove or set DEBUG=true to enable
  // if (process.env.NODE_ENV !== "production") {
  //   console.log("Submitted username:", username, "file:", file);
  // }


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
                  onChange={(e) => setFile(e.target.files[0])}
                />
              </div>
            </div>
            <Button className="mt-6" type="submit">
              {isLoading ? (
                <div className="flex items-center gap-2">
                  <div className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                  Updating profile...
                </div>
              ) : (
                'Update'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
      {/* Error Message */}
      {error && (
        <div className="rounded-md bg-red-50 border border-red-200 p-4">
          <div className="flex items-center">
            <span className="text-red-600 mr-2">✗</span>
            <p className="text-sm text-red-800">{error}</p>
          </div>
        </div>
      )}
    </div>
  );
}
