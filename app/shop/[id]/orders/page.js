

import CartItemWrapper from "../../component/cart-item-wrapper";




export default async function Cart({ params: { id } }) {
   

    
    return (
        <>

            <CartItemWrapper id = {id} />
        </>

    )
}
