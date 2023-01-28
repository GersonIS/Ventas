import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const proveedorModel = db.define('proveedores',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    empresa: {
        type: DataTypes.STRING(30),
        allowNull: false
    }
},{
    timestamps: true
})

empleadoModel.hasMany(proveedorModel,{
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

proveedorModel.belongsTo(empleadoModel,{
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default proveedorModel;