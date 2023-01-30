import imagenModel from "../models/Imagen.js";
import productoModel from "../models/Producto.js";

export const getAllProductos = async (req, res) => {
    try {
        const productos = await productoModel.findAll();
        res.json(productos);
    } catch (error) {
        res.json({ message: `Error al traer todos los productos ${error}` });
    }
}

export const getProducto = async (req, res) => {
    try {
        const producto = await productoModel.findAll({ where: { id: req.params.id } });
        res.json(producto[0]);
    } catch (error) {
        res.json({ message: `Error al traer un producto ${error}` });
    }
}

export const createProducto = async (req, res) => {
    try {
        const { codigo, producto, descripcion, ruta1, ruta2, ruta3, ruta4, categoriaId, empleadoId } = req.body;
        await productoModel.create({ codigo, producto, descripcion, categoriaId, empleadoId });
        const product = await productoModel.findAll({ where: { codigo } });
        const pId = product[0].id;
        await imagenModel.create({ ruta1, pId });
        await imagenModel.create({ ruta2, pId });
        await imagenModel.create({ ruta3, pId });
        await imagenModel.create({ ruta4, pId });
        res.json({ message: 'Se creo un producto con exito' });
    } catch (error) {
        res.json({ message: `Error al crear un producto ${error}` });
    }
}