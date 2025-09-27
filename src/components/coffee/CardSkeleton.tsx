import { Skeleton } from "@/components/ui/skeleton";

export function CoffeeCardSkeleton() {
  return (
    <div className="bg-neutral-900 rounded-xl shadow-md p-6 flex flex-col items-center relative">
      <Skeleton className="w-32 h-32 rounded-md mb-4" />
      <Skeleton className="h-6 w-24 mb-2" />
      <Skeleton className="h-4 w-32 mb-2" />
      <Skeleton className="h-5 w-20" />
    </div>
  );
}
