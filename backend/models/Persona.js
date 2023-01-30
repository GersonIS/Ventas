import { DataTypes } from "sequelize";
import db from "../db/db.js";
import proveedorModel from "./Proveedor.js";
import userModel from "./User.js";

const personaModel = db.define('personas', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    correo: {
        type: DataTypes.STRING(60),
        allowNull: false,
        unique: true
    },
    celular: {
        type: DataTypes.STRING(9),
        allowNull: true
    },
    documento: {
        type: DataTypes.STRING(11),
        allowNull: false,
        unique: true
    }
})

//Relacion de one a one con user
personaModel.hasOne(userModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

userModel.belongsTo(personaModel)

personaModel.hasOne(proveedorModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

proveedorModel.belongsTo(personaModel)

export default personaModel;