import { DataTypes } from "sequelize";
import db from "../db/db.js";
import medioEntregaModel from "./MedioEntrega.js";

const tipoEntregaModel = db.define('tipo_entrega', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    descripcion: {
        type: DataTypes.STRING(45),
        allowNull: false
    }
}, {
    timestamps: true
})

tipoEntregaModel.hasMany(medioEntregaModel, {
    foreignKey: 'tipoEntregaId',
    sourceKey: 'id'
})

medioEntregaModel.belongsTo(tipoEntregaModel, {
    foreignKey: 'tipoEntregaId',
    targetKey: 'id'
})

export default tipoEntregaModel;