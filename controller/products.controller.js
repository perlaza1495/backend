import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const newProduct = async (req, res, next ) => {   
    const data = req.body; // Obtén el cuerpo de la solicitud
  
    try {
      // Inserta el producto en la base de datos usando prisma.products.create
      const createdProduct = await prisma.products.create({
        data: {
          productName: data.productName,  // Mapea cada propiedad
          description: data.description,
          price: data.price,
          image: data.image,
          type: data.type,
        },
      });
      
      // Devuelve el producto creado en la respuesta
      res.status(201).json(createdProduct);
    } catch (error) {
      console.error("Error al crear el producto:", error);
      res.status(500).json({ error: "No se pudo crear el producto" });
    }
  };

  export const getProducts = async (req, res, next) => {
    try {
      // Obtén todos los productos de la base de datos usando prisma.products.findMany
      const products = await prisma.products.findMany();
      // Devuelve los productos en la respuesta
      res.status(200).json(products);
    } catch (error) {
      console.error("Error al obtener los productos:", error);
      res.status(500).json({ error: "No se pudieron obtener los productos" });
    }
  };

  export const deleteProduct = async (req, res, next) => {
    const { id } = req.params; // Obtén el id del producto de los parámetros de la solicitud
  
    try {
      // Elimina el producto de la base de datos usando prisma.products.delete
      const deletedProduct = await prisma.products.delete({
        where: {
          id: parseInt(id), // Convierte el id en un número entero
        },
      });
      // Devuelve el producto eliminado en la respuesta
      res.status(200).json(deletedProduct);
    } catch (error) {
      console.error("Error al eliminar el producto:", error);
      res.status(500).json({ error: "No se pudo eliminar el producto" });
    }
  };