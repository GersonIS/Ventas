import {DataType} from "sequelize";

import db from "../db/db.js";

const empleadoModel = db.define('empleados',{
    id:{
        type: DataType.INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    sueldo:{
        type: DataType.DECIMAL(8, 2),
        allowNull:false
    },
    rol:{
        type: DataType.STRING(15),
        allowNull:false
    }
},{timestamps:true})

export default empleadoModel;