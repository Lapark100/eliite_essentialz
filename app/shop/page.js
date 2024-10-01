"use client"

import { Suspense, useState } from "react";
import MeniItemNav from "./component/menu-item-nav";
import Category from "./component/categories";
import { menuItems} from "@/lib/menu-item";
import { ErrorBoundary } from "react-error-boundary";
import Products from "./component/products";

const allCategories = ['All', ...new Set(menuItems.map((item)=> item.category))]  


export default function Page() {
    const [items, setItems] = useState(menuItems)
    const [categories, setCategories] = useState(allCategories)

    const filterItems = (categories) => {
        if(categories === 'All') {
            setItems(menuItems)
            return;
        }
        const newItems = menuItems.filter((items)=> items.category === categories)
        setItems(newItems)
    }
    return (<div className=" my-4 space-y-6">
        <ErrorBoundary fallback={<div className="text-red-500 ">Cannot fetch products</div>}>
        <Suspense>
        <Category filterItems={filterItems} categories={categories}/>
        <MeniItemNav menuItems={items} />
        <Products />
        </Suspense>
        </ErrorBoundary>
        
    </div>)
}