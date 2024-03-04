
import { InCartItem, Title } from "@/components";
import { initialData } from "@/seed/seed";
import Link from "next/link";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

export default function CheckoutPage() {
  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title="Checkout" />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {/* Carrito */}
          <div className="flex flex-col mt-5">
            <span className="font-bold text-xl">Editar elementos</span>
            <Link href="/cart" className="underline mb-5">Modificar la orden</Link>

            {/* Items */}
            {
              productsInCart.map((product) => (
                <InCartItem key={product.slug} {...product} quantity={1} cardType="checkout" />
              ))
            }
          </div>

          {/* Checkout */}
          <div className="bg-white rounded-xl shadow-xl p-7 h-fit mt-5">

            <h2 className="text-xl font-bold mb-2">Dirección de entrega</h2>
            <div className="mb-5">
              <p>Florencia Luz Duarte</p>
              <p>Av. Siempre Viva 123</p>
              <p>Col. Centro</p>
              <p>Buenos Aires</p>
              <p>Argentina</p>
              <p>123456</p>
              <p>1515151515</p>
            </div>

            <div className="w-full h-0.5 rounded bg-gray-200 mb-5" />

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
              {/* TODO: Completar términos y condiciones + políticas de privacidad. Revisar código fuente sección 15 */}

              <Link href="/orders/123" className="flex btn-primary mt-5 justify-center">
                Confirmar pedido
              </Link>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}