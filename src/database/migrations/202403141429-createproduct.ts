import {  DataTypes, Sequelize } from 'sequelize';
import { IMigrationInterface } from './migrationhelper';

export class Migration2024031414 implements IMigrationInterface{
    async up(sequelize: Sequelize): Promise<void> {
        await sequelize.getQueryInterface().createTable('products', {
            id: {
              allowNull: false,
              autoIncrement: true, 
              primaryKey: true,
              type: DataTypes.INTEGER
            },
            name: {
              type: DataTypes.STRING,
              allowNull:false
            },
            description: {
              type: DataTypes.STRING,
              allowNull:true
            },
            brand: {
              type: DataTypes.STRING,
              allowNull:true
            },
            category: {
              type: DataTypes.STRING,
              allowNull:true
            },
            unitPrice: {
              type: DataTypes.DECIMAL,
              allowNull:false
            },
            stockLevel: {
              type: DataTypes.INTEGER,
              allowNull:false
            },

            createdAt: {
              allowNull: false,
              type: DataTypes.DATE
            },
            updatedAt: {
              allowNull: false,
              type: DataTypes.DATE
            }
          });
          }
        async down(sequelize: Sequelize): Promise<void> {

        throw new Error('Method not implemented.');
    }

}