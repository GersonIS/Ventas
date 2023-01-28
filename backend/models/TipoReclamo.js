import { DataTypes } from "sequelize";
import db from "../db/db";

const tipoReclamoModel = db.define('tipo_reclamo', {
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

export default tipoReclamoModel;