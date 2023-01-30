import { DataTypes } from "sequelize";
import db from "../db/db.js";

const medioEntregaModel = db.define('medio_entrega', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: true
    }
})

export default medioEntregaModel;