import { DataTypes } from "sequelize";
import db from "../db/db.js";
import clienteModel from "./Cliente.js";
import comprobanteModel from "./Comprobante.js";
import medioEntregaModel from "./MedioEntrega.js";
import medioPagoModel from "./MedioPago.js";
import tiendaModel from "./Tienda.js";

const ventaModel = db.define('ventas',{
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

tiendaModel.hasMany(ventaModel,{
    foreignKey: 'tiendaId',
    sourceKey: 'id'
})

ventaModel.belongsTo(tiendaModel,{
    foreignKey: 'tiendaId',
    targetKey: 'id'
})

comprobanteModel.hasOne(ventaModel,{
    foreignKey: 'comprobanteId',
    sourceKey: 'id'
})

ventaModel.belongsTo(comprobanteModel,{
    foreignKey: 'comprobanteId',
    targetKey: 'id'
})

clienteModel.hasMany(ventaModel,{
    foreignKey: 'clienteId',
    sourceKey: 'id'
})

ventaModel.belongsTo(clienteModel,{
    foreignKey: 'clienteId',
    targetKey: 'id'
})

medioPagoModel.hasMany(ventaModel,{
    foreignKey: 'medioPagoId',
    sourceKey: 'id'
})

ventaModel.belongsTo(medioPagoModel,{
    foreignKey: 'medioPagoId',
    targetKey: 'id'
})

medioEntregaModel.hasMany(ventaModel,{
    foreignKey: 'medioEntregaId',
    sourceKey: 'id'
})

ventaModel.belongsTo(medioEntregaModel,{
    foreignKey: 'medioEntregaId',
    targetKey: 'id'
})

export default ventaModel;