import { DataTypes } from "sequelize";
import db from "../db/db.js";
import detalleProductoModel from "./DetalleProducto";
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
}, {
    timestamps: true
})

tiendaModel.hasMany(productoTiendaModel, {
    foreignKey: 'tiendaId',
    sourceKey: 'id'
})

productoTiendaModel.belongsTo(tiendaModel, {
    foreignKey: 'tiendaId',
    targetKey: 'id'
})

detalleProductoModel.hasMany(productoTiendaModel, {
    foreignKey: 'detalleProductoId',
    sourceKey: 'id'
})

productoTiendaModel.belongsTo(detalleProductoModel, {
    foreignKey: 'detalleProductoId',
    targetKey: 'id'
})

export default productoTiendaModel;