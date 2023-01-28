import { DataTypes } from "sequelize";
import db from "../db/db";

const userModel = db.define('users',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING(60),
        allowNull: false
    },
    ruta: {
        type: DataTypes.STRING(60),
        defaultValue: "default.jpg"
    }
},{
    timestamps: true
})

export default userModel;