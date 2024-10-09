import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import Products from "./component/products";
import Range from "./component/range";
import MenuItemNavWrapper from "./component/menu-item-nav-wrapper";
import Skeleton from "@/components/skeleton";
import MenuItemNavFallback from "./component/menu-item-nav-fallback";





export default function Page({searchParams}) {

  const range = searchParams?.range ?? 'all'
  
  return (
    <div className="my-4 space-y-8" >
      <section className="flex justify-between">
        <h1 className="text-2xl font-semibold">Categories</h1>

        <aside>
        <Range />
      </aside>
      </section>

      

      <section className=" my-4 space-y-6">

        <ErrorBoundary fallback={<div className="text-red-500 ">Cannot fetch products</div>}>
          <Suspense fallback={<MenuItemNavFallback />}>
           <MenuItemNavWrapper range={range} />
            <Products />
          </Suspense>
        </ErrorBoundary>

      </section>
    </div>

  )
}