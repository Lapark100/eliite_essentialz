import CartItems from "./cart-item";
import { createClient } from "@/lib/supabase/server";

export default async function CartItemWrapper ({id}) {
    const supabase = createClient();
    const {
        data: cartItem,
        error,
    } = await supabase.from("products").select("*").eq("id", id);



    if (error) {
        console.error("Error fetching product");
    }
return (
    <CartItems cartItem = {cartItem} />
)
}