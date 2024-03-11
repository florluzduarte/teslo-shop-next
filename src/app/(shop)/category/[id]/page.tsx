//import { notFound } from "next/navigation";

import { ProductGrid, Title } from "@/components";
import { Category } from "@/interfaces";
import { initialData } from "@/seed/seed";
import { notFound } from "next/navigation";

interface CategoryProps {
  params: {
    id: Category;
  }
}

export default function CategoryPage({ params }: CategoryProps) {

  const { id } = params;

  const labels: Record<Category, string> = {
    "men": "Hombres",
    "women": "Mujeres",
    "kid": "Niños",
    "unisex": "Unisex"
  }

  if (!Object.keys(labels).find((key) => key === id)) {
    notFound();
  }

  const title = "Artículos destacados";
  const subtitle = `Categoría de productos | ${labels[id]}`;
  const products = initialData.products.filter((product) => product.gender === id);

  return (
    <>
      <Title title={title} subtitle={subtitle} />
      <ProductGrid products={products} />
    </>
  );
}