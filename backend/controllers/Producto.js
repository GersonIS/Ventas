import imagenModel from "../models/Imagen.js";
import productoModel from "../models/Producto.js";
import multer from "multer";

export const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./images/products/");
    },
    filename: (req, file, cb) => {
        const ext = file.originalname.split('.').pop();
        const ruta = `${Date.now()}.${ext}`;
        cb(null, ruta);
    }
})

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
        const { codigo, producto, descripcion, categoriaId, empleadoId } = req.body;
        const { ruta1, ruta2, ruta3, ruta4 } = req.files;
        console.log(ruta1);
        console.log(ruta2);
        console.log(ruta3);
        console.log(ruta4);
        console.log(req.file);
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

export const updateProducto = async (req, res) => {
    try {
        const { codigo, producto, descripcion, ruta1, ruta2, ruta3, ruta4, categoriaId } = req.body;
        await productoModel.update({ codigo, producto, descripcion, categoriaId }, { where: { id: req.params.id } });
        const product = await productoModel.findAll({ where: { id: req.params.id } });
        const pId = product[0].id;
        await imagenModel.update({ ruta1, pId });
        await imagenModel.update({ ruta2, pId });
        await imagenModel.update({ ruta3, pId });
        await imagenModel.update({ ruta4, pId });
        res.json({ message: 'Se actualizo el producto con exito' });
    } catch (error) {
        res.json({ message: `Error al actualizar un producto ${error}` });
    }
}

export const deleteProducto = async (req, res) => {
    try {
        await productoModel.destroy({ where: { id: req.params.id } });
        res.json({ message: 'Se elimino un producto con exito' });
    } catch (error) {
        res.json({ message: `Error al eliminar un producto ${error}` });
    }
}