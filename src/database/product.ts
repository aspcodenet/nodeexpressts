import { Model, CreationOptional,InferAttributes, InferCreationAttributes } from 'sequelize';
 

  export class Product extends Model<InferAttributes<Product, {  }>, InferCreationAttributes<Product, {  }>> {
    declare id: CreationOptional<number>;
    declare name: string | null;
    declare description: string | null;
    declare brand: string | null; 
    declare category: string | null;
    declare unitPrice: Number | null;  
    declare stockLevel: Number | null;
 
     // timestamps!
  // createdAt can be undefined during creation
  declare createdAt: CreationOptional<Date>;
  // updatedAt can be undefined during creation
  declare updatedAt: CreationOptional<Date>;
 
    // other attributes...
  }


  