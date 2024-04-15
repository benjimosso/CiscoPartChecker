import Image from "next/image";
import noImage from "../assets/images/no-image-available.jpg";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export default function Datalist({
  pn,
  image,
  id,
}: {
  pn: string;
  image?: string;
  id: number;
}) {
  return (
    <div>
      <Card className="hover:border-blue-300 ">
        <CardHeader>
          <CardTitle className="text-xl">{pn}</CardTitle>
          <CardDescription>Model# {pn}</CardDescription>
        </CardHeader>
        <CardContent className="flex justify-center ">
        {!image ? (
            <AspectRatio ratio={3 / 2}>
              <Image
                src={noImage}
                alt={pn}
                width={200}
                height={200}
                className="rounded-md object-cover overflow-auto mt-8"
              />
            </AspectRatio>
          ) : (
            <AspectRatio ratio={3 / 2}>
              <Image
                src={image}
                alt={pn}
                className=" rounded-md object-cover mt-8"
                width={200}
                height={200}
              />
            </AspectRatio>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
