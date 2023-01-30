import { DataTypes } from "sequelize";
import db from "../db/db.js";
import detalleProductoModel from "./DetalleProducto.js";
import tiendaModel from "./Tienda.js";

const productoTiendaModel = db.define('producto_tienda', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    stock: {
        type: DataTypes.INTEGER,
        defaultValue: 0
    }
})

tiendaModel.hasMany(productoTiendaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

productoTiendaModel.belongsTo(tiendaModel)

detalleProductoModel.hasMany(productoTiendaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

productoTiendaModel.belongsTo(detalleProductoModel)

export default productoTiendaModel;