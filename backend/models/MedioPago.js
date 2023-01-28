import { DataTypes } from "sequelize";
import db from "../db/db.js";

const medioPagoModel = db.define('medio_pago', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
}, {
    timestamps: true
})

export default medioPagoModel;