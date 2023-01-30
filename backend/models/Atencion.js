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
})

empleadoModel.hasMany(atencionModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

atencionModel.belongsTo(empleadoModel)

clienteModel.hasMany(atencionModel, {
    onDelete: 'CASCADE',
    onUpdate: 'CASCADE'
})

atencionModel.belongsTo(clienteModel)

export default atencionModel;