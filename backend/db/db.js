import { Sequelize } from "sequelize";

const db = new Sequelize('inventarioventa','root','',{
    host: "localhost",
    dialect: "mysql"
})

export default db;