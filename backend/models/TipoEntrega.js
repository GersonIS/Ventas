import { DataTypes } from "sequelize";
import db from "../db/db";

const tipoEntregaModel = db.define('tipo_entrega', {
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

export default tipoEntregaModel;