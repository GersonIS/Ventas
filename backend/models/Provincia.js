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
}, {
    timestamps: true
})

provinciaModel.hasMany(distritoModel, {
    foreignKey: 'provinciaId',
    sourceKey: 'id'
})

distritoModel.belongsTo(provinciaModel, {
    foreignKey: 'provinciaId',
    targetKey: 'id'
})

export default provinciaModel;