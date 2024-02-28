import type { Size } from "@/interfaces"
import clsx from "clsx";

interface SizeSelectorProps {
  selectedSize: Size;
  availableSizes: Size[];
}

export const SizeSelector = ({ selectedSize, availableSizes }: SizeSelectorProps) => {
  return (
    <div className="my-3">
      <h3 className="font-bold mb-4">Talles disponibles</h3>
      <div className="flex">
        {
          availableSizes.map((size) => (
            <button
              key={size}
              className={
                clsx("mx-2 hover:underline", {
                  underline: size === selectedSize
                })
              }
            >
              {size}
            </button>
          ))
        }
      </div>
    </div>
  )
}
