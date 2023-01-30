import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";
import ventaModel from "./Venta.js";

const reclamoModel = db.define('reclamos',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    estado: {
        type: DataTypes.STRING(15),
        allowNull: false
    }
})

ventaModel.hasMany(reclamoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

reclamoModel.belongsTo(ventaModel)

empleadoModel.hasMany(reclamoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

reclamoModel.belongsTo(empleadoModel)

export default reclamoModel;