import { DataTypes } from "sequelize";
import db from "../db/db";
import clienteModel from "./Cliente";
import empleadoModel from "./Empleado";

const userModel = db.define(
  "users",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    ruta: {
      type: DataTypes.STRING(60),
      defaultValue: "default.jpg",
    },
  },
  {
    timestamps: true,
  }
);

userModel.hasOne(clienteModel, {
  foreignKey: "userId",
  sourceKey: "id"
});

userModel.hasOne(empleadoModel,{
  foreignKey: "userId",
  sourceKey: "id"
})

clienteModel.belongsTo(userModel, {
  foreignKey: "userId",
  targetKey: "id"
});

empleadoModel.hasOne(userModel,{
  foreignKey: "userId",
  sourceKey: "id"
})


export default userModel;
