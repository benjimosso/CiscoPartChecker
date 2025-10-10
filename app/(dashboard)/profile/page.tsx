// supabase
import { createClient } from "@/utils/supabase/server";

import { Profiles } from "@/app/lib/interfaces";
import UpdateProfile from "@/app/components/updateprofile";

// shadcn
import {
  CardTitle,
  CardDescription,
  CardHeader,
  CardContent,
  CardFooter,
  Card,
} from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

async function getProfile() {
  const supabase = await createClient();
  const { data: profile, error } = await supabase
    .from("profiles")
    .select("*, company(company_name), teams(team_name)")
    .single();

  if (error) console.log("error", error);
  return (profile as Profiles) || null;
}

export default async function Profile() {
  const profile = await getProfile();

  // if (profile) {
  //   console.log(profile)
  // }

  // check if the user is logged in, if not, return a message (could be done down below as well)
  if (!profile) {
    return (
      <div>
        <h1>Please login to see your profile.</h1>
      </div>
    );
  }

  return (
    <div className="flex flex-1 m-20 border border-gray-300">
      <Card className="m-14 w-1/5 border border-primary">
        <CardHeader className="flex items-center">
          {/* <CardTitle> */}
          <Avatar>
            {profile.avatar ? (
              <AvatarImage src={profile.avatar} alt="avatar" />
            ) : (
              <AvatarFallback>
                {/* {Array.from(profile.first_name)[0] +
                  Array.from(profile.last_name)[0]} */}
              </AvatarFallback>
            )}
          </Avatar>
          {/* </CardTitle> */}
          <CardTitle>
            {profile.first_name} {profile.last_name}
          </CardTitle>
          <CardDescription>{profile.email}</CardDescription>
          {profile.username && (
            <CardDescription>{profile.username}</CardDescription>
          )}
          {profile.company && (
            <CardDescription>Company: {profile.company.company_name}</CardDescription>
          )}
          {profile.teams && (
            <CardDescription>Team: {profile.teams.team_name}</CardDescription>
          )}
        </CardHeader>
        <CardFooter className="flex flex-col items-center mt-10">
          <h1 className="text-primary text-xl">About</h1>
          <CardContent className="mt-5">
            {profile.about ? (
              <p>{profile.about}</p>
            ) : (
              <p className="font-sans text-slate-500">
                Please update your about section.
              </p>
            )}
          </CardContent>
        </CardFooter>
      </Card>
      {profile && <UpdateProfile profile={profile} />}
    </div>
  );
}
