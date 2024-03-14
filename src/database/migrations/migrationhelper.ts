import fs from 'fs'



import { sequelize } from '../db';
import { Sequelize, QueryTypes } from 'sequelize';
import { Migration202403101429 } from './202403101429-createplayer';
import { Migration202403110222AddJersey2 } from './202403111022-addJersey';
import { Migration2024031414 } from './202403141429-createproduct';

export interface IMigrationInterface {
    up( sequelize: Sequelize ): Promise<void>;
    down(sequelize: Sequelize): Promise<void>;
}

const allMigrations : IMigrationInterface[] = [
    new Migration202403101429,
    new Migration202403110222AddJersey2,
    new Migration2024031414
]


class  Meta{
    name:string = ""
}

export async function migrate(sequelize:Sequelize){
    //
    await sequelize.query("CREATE TABLE IF NOT EXISTS `SequelizeMeta` (`name` varchar(255) COLLATE utf8mb3_unicode_ci NOT NULL, PRIMARY KEY (`name`),UNIQUE KEY `name` (`name`))")
    let result : Meta[] = await sequelize.query<Meta>("SELECT * from SequelizeMeta",{type:QueryTypes.SELECT})

    
    for(let oneMigration of allMigrations){
        if(result.some(s=>s.name === oneMigration.constructor.name)){
            continue;
        }
        oneMigration.up(sequelize)   
        await sequelize.query({
            query: "INSERT `SequelizeMeta` (`name`) values(?) ",
            values:[oneMigration.constructor.name]
        },{type:QueryTypes.UPDATE})

    }
}