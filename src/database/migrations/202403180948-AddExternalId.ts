import {  DataTypes, Sequelize } from 'sequelize';
import { IMigrationInterface } from './migrationhelper';

export class Migration202403110222AddExternalId implements IMigrationInterface{
    async up(sequelize: Sequelize): Promise<void> {
        await sequelize.getQueryInterface().addColumn("products",
            "externalId",
            {
                type: DataTypes.STRING,
                allowNull: true,
                defaultValue: "",
              })         
    }



    async down(sequelize: Sequelize): Promise<void> {

        throw new Error('Method not implemented.');
    }

}