import { initialData } from "./seed";
import prisma from "../lib/prisma";

async function main() {
  //Limpio todos los campos de la base de datos antes de empezar a popularla
  await prisma.productImage.deleteMany();
  await prisma.product.deleteMany();
  await prisma.category.deleteMany();

  // Data que viene del seed
  const { categories, products } = initialData;

  // Inserto categorias
  const initialCategories = categories.map((category) => ({
    name: category
  }));

  await prisma.category.createMany({
    data: initialCategories
  });

  // Relación entre Productos y Categorias
  const categoriesDB = await prisma.category.findMany();

  const categoriesMap = categoriesDB.reduce((key, category) => {
    key[category.name.toLowerCase()] = category.id
    return key;
  }, {} as Record<string, string>) //<string=category.name>=<string=category.id>

  // Inserción de productos
  products.forEach(async (product) => {
    const { images, type, ...correctProduct } = product;
    const productDB = await prisma.product.create({
      data: {
        ...correctProduct,
        categoryId: categoriesMap[type]
      }
    })

    // Inserción de imágenes
    const imagesData = images.map((image) => ({
      url: image,
      productId: productDB.id
    }));

    await prisma.productImage.createMany({
      data: imagesData
    })
  })

  console.log("Seed ejecutado correctamente");
}


(() => {
  if (process.env.NODE_ENV === "production") return;
  main();
})();