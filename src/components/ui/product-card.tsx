"use client";

import Image from "next/image";
import { Product } from "../../../types";
import IconButton from "./IconButton";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "./Currency";
interface ProductCardProps {
  data: Product;
}

const ProductCard = ({ data }: ProductCardProps) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      <div className="aspect-square rounded-xl bg-gary-100 relative">
        <Image
          className="aspect-square object-cover rounded-md"
          alt="image"
          src={data?.images?.[0]?.url}
          fill
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton icon={<Expand size={30} className="text-gray-600"/>} onClick={() => {}}/>
            <IconButton icon={<ShoppingCart size={30} className="text-gray-600"/>} onClick={() => {}}/>
          </div>
        </div>
      </div>
      {/* description */}
      <div className="">
        <p className="font-semibold text-lg">{data.name}</p>
        <p className="text-sm text-gray-500 ">{data.category?.name}</p>
      </div>
      {/* price */}
      <div className="flex items-center justify-between">
        <Currency value = {data?.price}/>
      </div>
    </div>
  );
};

export default ProductCard;
