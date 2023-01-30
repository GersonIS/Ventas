import db from "../db/db.js";
import { DataTypes } from "sequelize";
import ventaModel from "./Venta.js";

const estadoVentaModel = db.define('estado_venta', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    }
})

ventaModel.hasMany(estadoVentaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

estadoVentaModel.belongsTo(ventaModel)

export default estadoVentaModel;