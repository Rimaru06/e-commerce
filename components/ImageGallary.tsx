"use client";

import { urlFor } from "@/lib/sanity";
import Image from "next/image";
import { useState } from "react";

interface ImageGallaryProps {
    images : any;
}

const ImageGallary = ({images} : ImageGallaryProps) => {
    const [bigImages , setBigImages] = useState(images[0]);
  return (
    <div className="grid gap-4 lg:grid-cols-5 ">
        <div className="order-last flex gap-4 lg:order-none lg:flex-col ">
            {images.map((image : any , idx : any) => {
              return (
                <div key={idx} className=" overflow-hidden rounded-lg bg-gray-100">
                    <Image onClick={()=>setBigImages(image)}  src={urlFor(image).url()} alt="image"  width={200} height={200} className=" h-full  w-full object-cover cursor-pointer object-center"/>

                </div>
              )  

            })}

        </div>
        <div className=" relative overflow-hidden rounded-lg bg-gray-100  lg:col-span-4">
            <Image src={urlFor(bigImages).url()} alt="photo" width={500} height={500} className="h-full w-full object-cover object-center " />
            <span className=" absolute left-0 top-0 rounded-br-lg bg-red-500 px-3 py-1.5 text-sm uppercase tracking-wider text-white  ">Sale</span>
5
        </div>
    </div>
  )
}

export default ImageGallary