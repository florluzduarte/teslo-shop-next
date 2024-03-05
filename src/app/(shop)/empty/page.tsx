import Link from "next/link";
import { IoCartOutline } from "react-icons/io5";

export default function EmptyPage() {
  return (
    <div className="flex justify-center items-center h-screen">
      <IoCartOutline size={70} />
      <div className="flex flex-col items-start ms-5">
        <h1 className="text-xl font-semibold">
          Tu carrito está vacío
        </h1>

        <Link
          href="/"
          className="text-blue-500 mt-2 text-4xl"
        >
          Regresar
        </Link>
      </div>
    </div>
  );
}