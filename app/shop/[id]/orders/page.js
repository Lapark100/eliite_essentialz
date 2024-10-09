import { createClient } from "@/lib/supabase/server";
import { ChevronDown, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sizes } from "@/lib/variant";
import { CartItemhandle } from "@/lib/actions";



export default async function Cart({ params: { id } }) {
    const supabase = createClient();
    const {
        data: cartItem,
        error,
    } = await supabase.from("products").select("*").eq("id", id);

    console.log(cartItem)

    if (error) {
        console.error("Error fetching product");
    }

    
    return (
        <>

            <div className="flex h-[500px] w-full rounded my-10 bg-white/40 shadow-lg backdrop-blur-sm border border-gray-300">
                {cartItem.map((item) => {
                    const { id, productName, description, image_url, price } = item
                    return (
                        <>
                            <div className="w-1/2" >
                                <Image className="w-full h-full object-cover" src={image_url} width={350} height={350} />
                            </div>
                            <div className="w-1/2 p-8 space-y-8 ">
                                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
                                    <Link href="/shop" className={`${sizes['base']} flex items-center space-x-2 text-sm`}>
                                        <ChevronLeft className="w-6 h-6 text-black" />
                                    </Link>
                                </div>
                                <div className=" space-y-4" >
                                    <h1 className="text-2xl uppercase font-bold" >{productName}</h1>
                                    <div className="flex justify-between" >

                                        <p>{description}</p>
                                        <p className="font-semibold ">₦{price}<span className="font-light text-sm">/unit</span></p>
                                    </div>


                                </div>
                                <div className="space-y-3">
                                    <div className="w-full h-[40px] px-3 flex items-center rounded-md bg-white border border-gray-300 justify-between">
                                        <h2 className="text-md text-gray-400">Product Details</h2>
                                        <ChevronDown className="w-4 h-4 text-gray-300" />
                                    </div>
                                    <div className="w-full h-[40px] px-3 flex items-center rounded-md bg-white border border-gray-300 justify-between">
                                        <h2 className="text-md text-gray-400">Reviews</h2>
                                        <ChevronDown className="w-4 h-4 text-gray-300" />
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <p></p>
                                    <div className="space-x-2">
                                        <input className="  bg-white/70 shadow-lg backdrop-blur-sm border border-gray-300 py-2 px-2 rounded-full w-[100px] text-black text-center" placeholder="1" type="number" />
                                        <button className="bg-yellow-300 py-2 px-3 rounded-full text-black">Add to bag <span>(₦{price})</span></button>
                                    </div>
                                </div>
                            </div>

                        </>

                    )
                })}

            </div>
        </>

    )
}
