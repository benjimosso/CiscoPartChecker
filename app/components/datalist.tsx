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
      <Card className="hover:border-blue-300">
        <CardHeader>
          <CardTitle className="text-xl">{pn}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription>Model# {pn}</CardDescription>
        </CardContent>
        <CardFooter className="relative flex justify-center">
          {!image ? (
            <Image src={noImage} alt={pn} className="w-20 h-20 rounded-full" />
          ) : (
            <Image 
            src={image} 
            alt={pn} 
            className=" rounded-full overflow-hidden w-20 h-20"
            priority
            width={80}
            height={80}
             />
          )}
        </CardFooter>
      </Card>
    </div>
  );
}
