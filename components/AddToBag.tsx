"use client";
import { Button } from "./ui/button";
import { useShoppingCart } from "use-shopping-cart";
import { ProductCart } from "@/types/interface";
import { Currency } from "lucide-react";
import { urlFor } from "@/lib/sanity";



export default function AddToBag({image , description , name , price , currency , price_id}: ProductCart) {
    const {addItem , handleCartClick} = useShoppingCart();
    const product = {
        name,
        description,
        price,
        currency,
        image : urlFor(image).url(),
        price_id
    }
    return <Button onClick={() =>{
        addItem(product);
        handleCartClick();
    } }  >Add To Bag</Button>
}