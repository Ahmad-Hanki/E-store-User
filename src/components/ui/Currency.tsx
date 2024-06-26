"use client";

import { Formatter } from "@/libs/formatter";
import { useEffect, useState } from "react";

interface CurrencyProps {
  value: string | number;
}

const Currency = ({ value }: CurrencyProps) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  },[]);

  if (!isMounted) return null;
  return <div className="font-semibold">{Formatter.format(+value)}</div>;
};

export default Currency;
