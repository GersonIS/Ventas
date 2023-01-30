import { DataTypes } from "sequelize";
import db from "../db/db.js";
import tiendaModel from "./Tienda.js";

const distritoModel = db.define('distritos', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    distrito: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
})

distritoModel.hasMany(tiendaModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

tiendaModel.belongsTo(distritoModel)

export default distritoModel;