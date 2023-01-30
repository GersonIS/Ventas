import { DataTypes } from "sequelize";
import db from "../db/db.js";
import clienteModel from "./Cliente.js";
import comprobanteModel from "./Comprobante.js";
import medioEntregaModel from "./MedioEntrega.js";
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
})

tiendaModel.hasMany(ventaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

ventaModel.belongsTo(tiendaModel)

comprobanteModel.hasOne(ventaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

ventaModel.belongsTo(comprobanteModel)

clienteModel.hasMany(ventaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

ventaModel.belongsTo(clienteModel)

medioEntregaModel.hasMany(ventaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

ventaModel.belongsTo(medioEntregaModel)

export default ventaModel;