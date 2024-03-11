import { notFound } from "next/navigation";

import { titleFont } from "@/config/fonts";
import { initialData } from "@/seed/seed";
import { ProductMobileSlideshow, ProductSlideshow, QuantitySelector, SizeSelector } from "@/components";

interface ProductPageProps {
  params: {
    slug: string;
  }
}

export default function ProductPage({ params }: ProductPageProps) {

  const { slug } = params;
  const product = initialData.products.find((product) => product.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <div className="mt-5 mb-20 grid grid-cols-1 md:grid-cols-3 gap-3">
      {/* SlideShow */}
      <div className="col-span-1 md:col-span-2">
        {/* Mobile slideshow */}
        <ProductMobileSlideshow title={product.title} images={product.images} className="mb-5 block md:hidden" />

        {/* Desktop slideshow */}
        <ProductSlideshow title={product.title} images={product.images} className="hidden md:block" />
      </div>

      {/* Detalles */}
      <div className="grid-cols-1 px-5">
        <h1 className={`${titleFont.className} antialiased font-bold text-xl mb-5`}>{product.title}</h1>
        <p className="font-lg mb-5">${product.price.toFixed(2)}</p>

        {/* Selector de Talles */}
        <SizeSelector availableSizes={product.sizes} selectedSize={product.sizes[2]} />

        {/* Selector de Cantidad */}
        <QuantitySelector quantity={2} />

        {/* Button AddToCart */}
        <button className="btn-primary my-5">Agregar al carrito</button>

        {/* Description */}
        <h2 className="font-bold mb-3">Descripción</h2>
        <p className="font-light">{product.description}</p>
      </div>

    </div>
  );
}