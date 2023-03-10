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
})

tipoReclamoModel.hasMany(reclamoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

reclamoModel.belongsTo(tipoReclamoModel)

export default tipoReclamoModel;