import express, { json } from 'express';
import { newProduct, getProducts, deleteProduct } from './controller/products.controller.js';

const app = express();

app.use(json());

const PORT = 4000;
app.listen(PORT, ()=> {
    console.log("Servidor corriendo en http://localhost:" + PORT);
});
//****************     ENDPOINT PRODUCTOS     ***************************** */

// obtener productos
app.get('/productos', getProducts);
// crear producto
app.post('/producto', newProduct);
// borrar producto
app.delete('/producto/:id', deleteProduct);
// actualizar producto

