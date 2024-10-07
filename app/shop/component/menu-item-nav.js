"use client"

import { Heart, HeartOff, ShoppingBag } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"


export default function MenuItemNav({ products }) {

    

    const [like, setLike] = useState(false)

   


    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {products.map((items) => {
                const { id, productName, description, image, amount } = items
                return (
                    <article key={id} className="flex flex-col w-full min-h-[400px] space-y-4 ">
                        {/* Image */}
                        <Image 
                            src={image} 
                            width={400} 
                            height={400} 
                            className="rounded object-cover w-full h-60" 
                            alt={productName}
                            quality={50}
                            priority={true}
                        />

                        {/* Text Content */}
                        <div>
                            <h2 className="font-bold uppercase text-lg">{productName}</h2>
                            <p className="text-xs">{description}</p>
                        </div>

                        {/* Price and Button Section */}
                        <div className="flex items-center justify-between mt-auto">
                            <p className="font-semibold">₦{amount}<span className="font-light text-sm">/unit</span></p>
                            <div className="space-x-5 flex">
                                <button onClick={() => setLike(!like)}>
                                    {like ? <Heart className="w-4 h-4" /> : <HeartOff className="w-4 h-4" />}
                                </button>
                                <Link href="/cart">
                                    <button className="w-10 h-10 flex justify-center items-center rounded-full bg-white/40 shadow-lg backdrop-blur-sm border border-gray-300">
                                        <ShoppingBag className="w-4 h-4" />
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </article>
                )
            })}
        </div>
    )
}