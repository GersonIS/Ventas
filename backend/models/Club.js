import { DataTypes } from "sequelize";
import db from "../db/db";

const clubModel = db.define('clubes', {
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

export default clubModel;