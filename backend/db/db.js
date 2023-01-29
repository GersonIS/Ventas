import { Sequelize } from "sequelize";

const db = new Sequelize('inventarioventa','root','YoWi2819@12',{
    port: 3306,
    dialect: "mysql"
})

export default db;