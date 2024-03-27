"use client";

import axios from "axios";
import { useEffect } from "react";

import { useSearchParams } from "next/navigation";
import { useParams } from "next/navigation";
import { usePathname } from "next/navigation";

import Button from "@/components/ui/Button";

import Currency from "@/components/ui/Currency";

import useCart from "@/hooks/use-cart";
import toast from "react-hot-toast";
const Summary = () => {
  const items = useCart((state) => state.items);
  const removeAll = useCart((state) => state.removeAll);
  const searchParams = useSearchParams();

  useEffect(() => {
    if (searchParams.get("success")) {
      toast.success("Payment completed!");
      removeAll();
    } else if (searchParams.get("canceled")) {
      toast.error("something went wrong!");
    }
  }, []);
  const totalPrice = items.reduce((sum, item) => +sum + +item.price, 0);

  const onCheckout = async () => {
    const res = await axios.post(
      `${process.env.Next_Public_Api_Url}/checkout`,
      {
        productIds: items.map((item) => item.id),
      }
    );

    window.location = res.data.url;
  };
  return (
    <div className="mt-16 rounded-lg bg-gray-50 px-4 py-6 sm:p-6 lg:col-span-6 lg:mt-0 lg:p-8 ">
      <h2 className="text-lg font-medium text-gray-900">Order Summery</h2>
      <div className="mt-6 space-y-4 ">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order total</div>
          <Currency value={totalPrice} />
        </div>
      </div>
      <Button className="w-full mt-6" onClick={onCheckout}>
        Checkout
      </Button>
    </div>
  );
};

export default Summary;