import { DataTypes } from "sequelize";
import db from "../db/db.js";
import reclamoModel from "./Reclamo.js";

const tipoReclamoModel = db.define('tipo_reclamo', {
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

tipoReclamoModel.hasMany(reclamoModel,{
    foreignKey: 'tipoReclamoId',
    sourceKey: 'id'
})

reclamoModel.belongsTo(tipoReclamoModel,{
    foreignKey: 'tipoReclamoId',
    targetKey: 'id'
})

export default tipoReclamoModel;