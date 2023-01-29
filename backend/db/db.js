import { Sequelize } from "sequelize";

const db = new Sequelize('inventarioventa','root','',{
    port: 3306,
    dialect: "mysql"
})

export default db;