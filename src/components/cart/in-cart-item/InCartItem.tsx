import { QuantitySelector } from "@/components";
import Image from "next/image"

interface InCartItemProps {
  slug: string;
  images: string[];
  title: string;
  price: number;
  quantity: number;
  cardType: "cart" | "checkout";
}

export const InCartItem = ({ slug, images, title, price, quantity, cardType }: InCartItemProps) => {
  return (
    <div key={slug} className="flex mb-6">
      <Image
        src={`/products/${images[0]}`}
        alt={title}
        width={100}
        height={100}
        className="mr-5 rounded w-[100px] h-[100px]"
      />
      <div>
        <p>{title.slice(0, 25)} <span>...</span></p>
        {
          cardType === "cart" && <p className="font-bold mb-3">${price.toFixed(2)}</p>
        }
        {
          cardType === "cart" && <QuantitySelector quantity={quantity} />
        }
        {
          cardType === "cart" && <button className="underline mt-3">Remover</button>
        }
        {
          cardType === "checkout" && <p className="mb-3">
            ${`${price.toFixed(2)} | ${quantity} ${quantity > 1 ? "items" : "item"}`}
          </p>
        }
        {
          cardType === "checkout" && <p className="font-bold">Subtotal: {(price * quantity).toFixed(2)}</p>
        }
      </div>
    </div>
  )
}
