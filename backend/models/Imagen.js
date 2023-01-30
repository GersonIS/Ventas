import { DataTypes } from "sequelize";
import db from "../db/db.js";
import productoModel from "./Producto.js";

const imagenModel = db.define('imagenes', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    ruta: {
        type: DataTypes.STRING(60),
        defaultValue: "default.jpg"
    }
})

productoModel.hasMany(imagenModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

imagenModel.belongsTo(productoModel)

export default imagenModel;