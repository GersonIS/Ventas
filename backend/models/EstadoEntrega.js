import db from "../db/db.js";
import { DataTypes } from "sequelize";
import estadoVentaModel from "./EstadoVenta.js";

const estadoEntregaModel = db.define('estado_entrega',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
})

estadoEntregaModel.hasMany(estadoVentaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

estadoVentaModel.belongsTo(estadoEntregaModel)

export default estadoEntregaModel;