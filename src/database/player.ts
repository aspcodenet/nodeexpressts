import { Model, CreationOptional,InferAttributes, InferCreationAttributes } from 'sequelize';
 

// NULÄGE !!! Vi vill att NU ska alla Players ha dessa properties
  export class Player extends Model<InferAttributes<Player, {  }>, InferCreationAttributes<Player, {  }>> {
    declare id: CreationOptional<number>;
    declare name: string;
    declare team: string | null;
 
     // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
 
    // other attributes...
  }