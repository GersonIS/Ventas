import express from "express";
import db from "./db/db.js";
import cors from 'cors';
import './models/Atencion.js'; import './models/Categoria.js'; import './models/Cliente.js'; import './models/Club.js';
import './models/Color.js'; import './models/Compra.js'; import './models/CompraProducto.js'; import './models/Comprobante.js';
import './models/Departamento.js'; import './models/DetalleProducto.js'; import './models/Distrito.js'; import './models/Empleado.js';
import './models/Genero.js'; import './models/Imagen.js'; import './models/MedioEntrega.js';
import './models/Modelo.js'; import './models/Persona.js'; import './models/Producto.js'; import './models/ProductoTienda.js';
import './models/ProductoVenta.js'; import './models/Proveedor.js'; import './models/Provincia.js'; import './models/Reclamo.js';
import './models/Talla.js'; import './models/Temporada.js'; import './models/Tienda.js';
import './models/TipoReclamo.js'; import './models/User.js'; import './models/Venta.js';import './models/EstadoEntrega.js';
import routerCategoria from "./routes/Categoria.js";
import routerCliente from "./routes/Cliente.js";
import routerClub from "./routes/Club.js";
import routerColor from "./routes/Color.js";
import routerEmpleado from "./routes/Empleado.js";
import routerGenero from "./routes/Genero.js";
import routerModelo from "./routes/Modelo.js";
import routerProveedor from "./routes/Proveedor.js";
import routerTalla from "./routes/Talla.js";
import routerTemporada from "./routes/Temporada.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use('/categorias', routerCategoria);
app.use('/clientes', routerCliente);
app.use('/clubes', routerClub);
app.use('/colores', routerColor);
app.use('/generos', routerGenero);
app.use('/modelos', routerModelo);
app.use('/proveedores', routerProveedor);
app.use('/tallas', routerTalla);
app.use('/temporadas', routerTemporada);
app.use('/usuarios', routerEmpleado);

app.use('/images', express.static('images'));

try {
    await db.authenticate();
    await db.sync({ force: false });
    console.log("Se conecto correctamente a la DB");
} catch (error) {
    console.log(`Problema al conectar la DB ${error}`);
}

app.get('/', (req, res) => {
    res.json({ m: "Hola lola" })
})

app.listen(5000, () => console.log("Estoy corriendo"));