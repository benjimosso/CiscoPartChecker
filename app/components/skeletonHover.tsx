// shadcn
import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonHover() {
  return (
    <div className="flex flex-col space-y-3">
      <div className="space-y-2">
        <Skeleton className="h-4 w-[250px]" />
        <Skeleton className="h-4 w-[200px]" />
      </div>
      <Skeleton className="h-[200px] w-[200px] rounded-xl" />
    </div>
  );
}
