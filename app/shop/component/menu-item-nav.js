"use client"

import { Heart, HeartOff, Loader, ShoppingBag } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { fetchProducts } from "@/lib/actions"
import Button from "@/components/button"


export default function MenuItemNav({ range, products }) {

    const [product, setProducts] = useState(products)
    const [buttonHidden, setButtonHidden] = useState(products.length === 0)
    const [loading, setLoading] = useState(false)
    

    const handleClick = async () => {
        setLoading(true)
        let nextProducts = null;
        try {
           nextProducts = await fetchProducts(range, product.length, 10) 
           setButtonHidden(nextProducts.length === 0)
           setProducts(prevProducts => [
            ...prevProducts,
            ...nextProducts
           ])
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {product.map((items) => {
                const { id, productName, description, image_url, price } = items
                return (
                    <article key={id} className="flex flex-col w-full min-h-[400px] space-y-4 ">
                        {/* Image */}
                        <Image 
                            src={image_url} 
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
                            <p className="font-semibold">₦{price}<span className="font-light text-sm">/unit</span></p>
                            <div className="space-x-5 flex">
                                <button onClick>
                                <Heart className="w-4 h-4" />
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
        {products.length === 0 && <div className="text-center text-gray-500">No products</div>}
        {!buttonHidden && <div className="flex justify-center">
            <Button variant="ghost" onClick={handleClick} disabled={loading}>
                <div className="flex space-x-1">
                {loading && <Loader className="animate-spin"/>}
                <div>
                    Load More
                </div>
                </div>
            </Button>
        </div>}
        </>
        
    )
}