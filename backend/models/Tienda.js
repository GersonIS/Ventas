import { DataTypes } from "sequelize";
import db from "../db/db.js";

const tiendaModel = db.define('tiendas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
    },
    codigo_postal: {
        type: DataTypes.STRING(6),
        allowNull: false
    },
    direccion: {
        type: DataTypes.STRING(60),
        allowNull: false
    }
}, {
    timestamps: true
})


export default tiendaModel;