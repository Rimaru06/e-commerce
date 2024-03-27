"use client";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "@/types/interface";
import { Currency } from "lucide-react";
import { urlFor } from "@/lib/sanity";

export default function CheckoutNow({
  image,
  description,
  name,
  price,
  currency,
  price_id,
}: ProductCart) {
  const { checkoutSingleItem } = useShoppingCart();
  const product = {
    name,
    description,
    price,
    currency,
    image: urlFor(image).url(),
    price_id,
  };
  return (
    <Button
      onClick={() => {
        checkoutSingleItem(product.price_id)
      }}
    >
      Checkout Now
    </Button>
  );
}
