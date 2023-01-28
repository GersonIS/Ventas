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
},{
    timestamps: true
})

empleadoModel.hasMany(compraModel,{
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

compraModel.belongsTo(empleadoModel,{
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

tiendaModel.hasMany(compraModel,{
    foreignKey: 'tiendaId',
    sourceKey: 'id'
})

compraModel.belongsTo(tiendaModel,{
    foreignKey: 'tiendaId',
    targetKey: 'id'
})

comprobanteModel.hasOne(compraModel,{
    foreignKey: 'comprobanteId',
    sourceKey: 'id'
})

compraModel.belongsTo(comprobanteModel,{
    foreignKey: 'comprobanteId',
    targetKey: 'id'
})

export default compraModel;