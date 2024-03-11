import {  DataTypes, Sequelize } from 'sequelize';
import { IMigrationInterface } from './migrationhelper';

export class Migration202403110222AddJersey2 implements IMigrationInterface{
    async up(sequelize: Sequelize): Promise<void> {
        await sequelize.getQueryInterface().addColumn("players",
            "jersey",
            {
                type: DataTypes.INTEGER,
                allowNull: true,
                defaultValue: 0,
              })         
    }



    async down(sequelize: Sequelize): Promise<void> {

        throw new Error('Method not implemented.');
    }

}