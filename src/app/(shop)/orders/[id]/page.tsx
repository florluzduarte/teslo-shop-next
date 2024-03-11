
import { InCartItem, Title } from "@/components";
import { initialData } from "@/seed/seed";
import clsx from "clsx";
import { IoCardOutline } from "react-icons/io5";

const productsInCart = [
  initialData.products[0],
  initialData.products[1],
  initialData.products[2],
]

interface OrderProps {
  params: {
    id: string;
  }
}

export default function OrderPage({ params }: OrderProps) {

  const { id } = params;

  //TODO: 

  return (
    <div className="flex justify-center items-center mb-72 px-10 sm:px-0">
      <div className="flex flex-col w-[1000px]">
        <Title title={`Orden #${id}`} />

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">

          <div className="flex flex-col mt-5">
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
              {/* Status de compra */}
              <div className={
                clsx(
                  "flex items-center rounded-lg p-2 mt-5 text-xs font-bold text-white",
                  {
                    "bg-red-500": true,
                    "bg-green-500": false,
                  }
                )
              }>
                <IoCardOutline size={24} />
                <span className="mx-2">Pago en proceso</span>
                {/* <span className="mx-2">Pagada</span> */}
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

