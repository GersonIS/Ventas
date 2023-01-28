import { DataTypes } from "sequelize";
import db from "../db/db.js";
import medioPagoModel from "./MedioPago.js";

const tipoPagoModel = db.define('tipo_pago', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: true
})

tipoPagoModel.hasMany(medioPagoModel, {
    foreignKey: 'tipoPagoId',
    sourceKey: 'id'
})

medioPagoModel.belongsTo(tipoPagoModel, {
    foreignKey: 'tipoPagoId',
    targetKey: 'id'
})

export default tipoPagoModel;

