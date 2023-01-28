import { DataType } from "sequelize";

import db from "../db/db.js";

const clienteModel = db.define("clientes", {
    id:{
        type: DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    descripcion:{
        type: DataType.STRING(45),
        allowNull: false
    }
}, { timestamps: true });



export default clienteModel;