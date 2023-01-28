import { DataTypes } from "sequelize";
import db from "../db/db.js";
import clienteModel from "./Cliente.js";
import empleadoModel from "./Empleado.js";

const atencionModel = db.define('atenciones', {
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

empleadoModel.hasMany(atencionModel, {
    foreignKey: 'empleadoId',
    sourceKey: 'id'
})

atencionModel.belongsTo(empleadoModel, {
    foreignKey: 'empleadoId',
    targetKey: 'id'
})

clienteModel.hasMany(atencionModel, {
    foreignKey: 'clienteId',
    sourceKey: 'id'
})

atencionModel.belongsTo(clienteModel, {
    foreignKey: 'clienteId',
    targetKey: 'id'
})

export default atencionModel;