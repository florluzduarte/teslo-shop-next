import Link from "next/link";
import { InCartItem, Title } from "@/components";
import { initialData } from "@/seed/seed";
import { redirect } from "next/navigation";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CartPage() {

  //TODO: Implementar redirect en base al estado del carrito. Si está vacío llevar a /empty
  //redirect("/empty");

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Carrito" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="font-bold text-xl">Agregar más productos</span>
            <Link href="/" className="underline mb-5">Continúa comprando</Link>

            {/* Items */}
            {
              productsInCart.map((product) => (
                <InCartItem key={product.slug} {...product} quantity={1} cardType="cart" />
              ))
            }
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit mt-5">
            <h2 className="text-xl font-bold">Resumen de compra</h2>

            <div className="grid grid-cols-2">
              <span>Nro. de productos</span>
              <span className="text-right">3 artículos</span>

              <span>Subtotal</span>
              <span className="text-right">$ 100.00</span>

              <span>Impuestos [15%]</span>
              <span className="text-right">$ 15.00</span>

              <span className="mt-5 text-2xl">Total:</span>
              <span className="mt-5 text-2xl text-right">$ 115.00</span>
            </div>

            <div>
              <Link href="/checkout/address" className="flex btn-primary mt-5 justify-center">
                Ir a pagar
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}