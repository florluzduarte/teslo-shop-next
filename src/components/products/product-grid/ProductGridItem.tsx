"use client";

import { Product } from "@/interfaces"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ProductGridItemProps {
  product: Product
}

export const ProductGridItem = ({ product }: ProductGridItemProps) => {

  const initialState = product.images[0];
  const [displayImage, setDisplayImage] = useState(initialState);

  return (
    <div className="fade-in rounded-md overflow-hidden">
      <Link href={`/product/${product.slug}`}>
        <Image
          src={`/products/${displayImage}`}
          alt={product.title}
          className="w-full object-cover rounded"
          width={500}
          height={500}
          onMouseEnter={() => setDisplayImage(product.images[1])}
          onMouseLeave={() => setDisplayImage(initialState)}
        />
      </Link>

      <div className="p-4 flex flex-col">
        <Link href={`/product/${product.slug}`}
          className="hover:text-blue-600"
        >
          {product.title}
        </Link>
        <p className="font-bold">${product.price.toFixed(2)}</p>
      </div>
    </div>
  )
}
