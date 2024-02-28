"use client";
import { useState } from "react";
import { IoAddCircleOutline, IoRemoveCircleOutline } from "react-icons/io5";

interface QuantitySelectorProps {
  quantity: number;
}

export const QuantitySelector = ({ quantity }: QuantitySelectorProps) => {

  const [counter, setCounter] = useState(quantity)

  const handleIncrement = () => {
    if (counter === 5) return;
    setCounter(counter + 1);
  }

  const handleDecrement = () => {
    if (counter === 0) return;
    setCounter(counter - 1);
  }

  return (
    <div className="flex mt-5 items-center">
      <button onClick={handleDecrement}>
        <IoRemoveCircleOutline size={30}
          className={`${counter === 0 ? "text-gray-300" : ""}`}
        />
      </button>

      <span className="w-20 mx-3 px-5 py-1 bg-gray-200 text-center rounded">
        {counter}
      </span>

      <button onClick={handleIncrement}>
        <IoAddCircleOutline size={30}
          className={`${counter === 5 ? "text-gray-300" : ""}`}
        />
      </button>

    </div>
  )
};