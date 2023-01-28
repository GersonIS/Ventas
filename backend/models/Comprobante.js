import { DataTypes } from "sequelize";
import db from "../db/db.js";

const comprobanteModel = db.define('comprobantes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(20),
        allowNull: true
    }
}, {
    timestamps: true
})

export default comprobanteModel;