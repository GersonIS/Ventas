import { DataTypes } from "sequelize";
import db from "../db/db.js";
import distritoModel from "./Distrito.js";

const provinciaModel = db.define('provincias', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    provincia: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
})

provinciaModel.hasMany(distritoModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

distritoModel.belongsTo(provinciaModel)

export default provinciaModel;