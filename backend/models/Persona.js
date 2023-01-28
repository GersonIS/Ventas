import { DataTypes } from "sequelize";
import db from "../db/db";
import { userModel } from "./User.js";

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
}, {
    timestamps: true
})

//Relacion de one a one con user
personaModel.hasOne(userModel,{
    foreignKey: 'personaId',
    sourceKey: 'id'
})

userModel.belongsTo(personaModel,{
    foreignKey: 'personaId',
    targetKey: 'id'
})

export default personaModel;