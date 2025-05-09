"use client"

import Image from "next/image"
import { useState } from "react"

import { cn } from "@/lib/utils"

const ProductImages = ({ images }: { images: string[] }) => {
  const [current, setCurrent] = useState(0)
  return (
    <div className="space-y-4">
      <Image
        src={images[current]}
        alt="Product image"
        width={1000}
        height={1000}
        className="min-h-[300px] object-cover object-center"
        priority
      />
      <div className="flex">
        {images.map((image, index) => (
          <div
            key={image}
            onClick={() => setCurrent(index)}
            className={cn(
              "mr-2 cursor-pointer border hover:border-amber-500",
              current === index && "border-amber-300"
            )}
          >
            <Image src={image} alt="Image" width={100} height={100} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProductImages
