"use client";

import { ChevronDown, ChevronLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { sizes } from "@/lib/variant";
import { useState } from "react";

export default function CartItems({ cartItem }) {
  const [cart, setCart] = useState(cartItem);
  const [quantity, setQuantity] = useState(1); // Initial quantity

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    setQuantity(value > 0 ? value : 1); // Ensure quantity is never less than 1
  };

  return (
    <>
      <div className="flex h-[500px] w-full rounded my-10 bg-white/40 shadow-lg backdrop-blur-sm border border-gray-300">
        {cart.map((item) => {
          const { id, productName, description, image_url, price } = item;
          return (
            <div key={id} className="flex w-full">
              <div className="w-1/2">
                <Image
                  className="w-full h-full object-cover"
                  src={image_url}
                  width={350}
                  height={350}
                  alt={productName}
                />
              </div>
              <div className="w-1/2 p-8 space-y-8 flex flex-col justify-center ">
                <div className="w-10 h-10 flex justify-center items-center rounded-full bg-white">
                  <Link
                    href="/shop"
                    className={`${sizes["base"]} flex items-center space-x-2 text-sm`}
                  >
                    <ChevronLeft className="w-6 h-6 text-black" />
                  </Link>
                </div>
                <div className="space-y-4">
                  <h1 className="text-2xl uppercase font-bold">{productName}</h1>
                  <div className="flex justify-between">
                    <p>{description}</p>
                    <p className="font-semibold">
                      ₦{price}
                      <span className="font-light text-sm">/unit</span>
                    </p>
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
                  <div className="w-full h-[40px] px-3 flex items-center rounded-md bg-white border border-gray-300 justify-between">
                    <h2 className="text-md text-gray-400">Details</h2>
                    <ChevronDown className="w-4 h-4 text-gray-300" />
                  </div>
                </div>
                <div className="flex justify-between">
                  <p></p>
                  <div className="space-x-2">
                    <input
                      className="bg-white/70 shadow-lg backdrop-blur-sm border border-gray-300 py-2 px-2 rounded-full w-[100px] text-black text-center focus:outline-none focus:ring-2 focus:ring-yellow-300 "
                      placeholder="1"
                      type="number"
                      value={quantity}
                      onChange={handleQuantityChange}
                    />
                    <button className="bg-yellow-300 py-2 px-3 rounded-full text-black  ">
                      Add to bag <span>(₦{price * quantity})</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
