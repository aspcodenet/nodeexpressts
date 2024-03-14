import {  Sequelize, DataTypes  } from 'sequelize';

import dotenv from 'dotenv';
import { Player } from './player';
import { Product } from './product';
dotenv.config();  // process.env.DB_PASSWORD hejsan123

export const sequelize = new Sequelize(`mysql://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}:3306/${process.env.DB_DATABASE}`)


export async function initializeDatabase(){
    Player.init(
        {
          id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          team: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          jersey: {
            type: new DataTypes.INTEGER,
            allowNull: true
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        },
        {
          tableName: 'players',
          sequelize // passing the `sequelize` instance is required
        }
      );


      Product.init(
        {
          id: {
            type: DataTypes.INTEGER.UNSIGNED,
            autoIncrement: true,
            primaryKey: true
          },
          name: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          description: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          brand: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          category: {
            type: new DataTypes.STRING(128),
            allowNull: false
          },
          unitPrice: {
            type: new DataTypes.DECIMAL,
            allowNull: false
          },
          stockLevel: {
            type: new DataTypes.INTEGER,
            allowNull: false
          },
          createdAt: DataTypes.DATE,
          updatedAt: DataTypes.DATE,
        },
        {
          tableName: 'products',
          sequelize // passing the `sequelize` instance is required
        }
      );



     

}

export async function SeedProducts(){

}