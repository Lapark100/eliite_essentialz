import Skeleton from "@/components/skeleton";
import ProductsFallback from "./products-fallback";

export default function MenuItemNavFallback() {
  return (
    <div className="my-4 space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      <article className="flex flex-col w-full min-h-[400px] space-y-4">
        <Skeleton className="w-full h-full" />
      </article>

      <article className="flex flex-col w-full min-h-[400px] space-y-4">
        <Skeleton className="w-full h-full" />
      </article>

      <article className="flex flex-col w-full min-h-[400px] space-y-4">
        <Skeleton className="w-full h-full" />
      </article>
    </div>

    <ProductsFallback />
    </div>
    
  );
}
