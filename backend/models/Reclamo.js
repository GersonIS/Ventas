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

ventaModel.hasMany(reclamoModel,{
    foreignKey: 'ventaId',
    sourceKey: 'id'
})

reclamoModel.belongsTo(ventaModel,{
    foreignKey: 'ventaId',
    targetKey: 'id'
})

empleadoModel.hasMany(reclamoModel,{
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

reclamoModel.belongsTo(empleadoModel,{
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

export default reclamoModel;