import { fetchProducts } from "@/lib/actions";
import MenuItemNav from "./menu-item-nav";

export default async function MenuItemNavWrapper({range}) {
    console.log(range)
    const products = await fetchProducts(range)
    console.log(products)
   
    return <MenuItemNav products={products} key={range} range={range}/>
}