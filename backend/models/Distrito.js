import { DataTypes } from "sequelize";
import db from "../db/db";
import { tiendaModel } from "./Tienda";

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
}, {
    timestamps: true
})

distritoModel.hasMany(tiendaModel, {
    foreignKey: 'distritoId',
    sourceKey: 'id'
})

tiendaModel.belongsTo(distritoModel, {
    foreignKey: 'distritoId',
    targetKey: 'id'
})

export default distritoModel;