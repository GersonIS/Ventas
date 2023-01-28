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
},{
    timestamps: true
})

productoModel.hasMany(imagenModel,{
    foreignKey: 'productoId',
    sourceKey: 'id'
})

imagenModel.belongsTo(productoModel,{
    foreignKey: 'productoId',
    targetKey: 'id'
})

export default imagenModel;