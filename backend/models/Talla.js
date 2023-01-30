import { DataTypes } from "sequelize";
import db from "../db/db.js";
import empleadoModel from "./Empleado.js";

const tallaModel = db.define('tallas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    talla: {
        type: DataTypes.STRING(5),
        allowNull: false
    }
})

empleadoModel.hasMany(tallaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

tallaModel.belongsTo(empleadoModel)

export default tallaModel;