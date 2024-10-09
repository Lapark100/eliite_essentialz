import { fetchProducts } from "@/lib/actions";
import MenuItemNav from "./menu-item-nav";

export default async function MenuItemNavWrapper({range}) {
    
    const products = await fetchProducts(range)
    
   
    return <MenuItemNav products={products} key={range} range={range}/>
}