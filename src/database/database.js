import Sequelize from "sequelize";

export const sequelize  = new Sequelize('projectsdb', 'postgres', 'mariano', { 
    host:'localhost',
    dialect:'postgres'
})