import { DataTypes } from "sequelize";
import db from "../db/db.js";
import comprobanteModel from "./Comprobante.js";
import empleadoModel from "./Empleado.js";
import tiendaModel from "./Tienda.js";

const compraModel = db.define('compras',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    subtotal: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    descuento: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    igv: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    },
    total: {
        type: DataTypes.DECIMAL(8,2),
        allowNull: false
    }
})

empleadoModel.hasMany(compraModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

compraModel.belongsTo(empleadoModel)

tiendaModel.hasMany(compraModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

compraModel.belongsTo(tiendaModel)

comprobanteModel.hasOne(compraModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

compraModel.belongsTo(comprobanteModel)

export default compraModel;