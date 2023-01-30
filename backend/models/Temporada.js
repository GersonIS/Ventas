import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const temporadaModel = db.define('temporadas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    temporada: {
        type: DataTypes.STRING(10),
        allowNull: false
    }
})

empleadoModel.hasMany(temporadaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

temporadaModel.belongsTo(empleadoModel)

export default temporadaModel;