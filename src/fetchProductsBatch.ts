import { initializeDatabase, sequelize } from "./database/db";
import { migrate } from "./database/migrations/migrationhelper";
import { Product } from "./database/product";
import { Player } from "./database/player";
import { exit } from "process";

type ExternalSystemProduct = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
  };
  

  async function fetchProducts() {
    const response = await fetch(
      'https://fakestoreapi.com/products'
    );
    const result = await response.json();
    return result as Promise<ExternalSystemProduct[]>;
  }


async function syncProducts() {
    // https://fakestoreapi.com/products
    let products = await fetchProducts()
    for(let p of products){
      const existingProduct = await Product.findOne({
        where:{
          externalID: p.id
        }
      });
      if(existingProduct === null  ||  existingProduct === undefined){
        await Product.create({
          externalID:p.id.toString(),
          name: p.title,
          description: "",
          unitPrice: p.price,
          category:p.category,
          stockLevel:0,
          brand:""
      });
      }else{
        existingProduct.name = p.title;
        existingProduct.description = p.description.substring(100);
        existingProduct.unitPrice = p.price;
        existingProduct.category = p.category;
        await existingProduct.save()
      }
      // om p.id redan finns i vår databas:
      /// mappa emot product.externalID
      //      vi köra update
      // annars
    //       vi köra insert

        console.log(p.title)
    }

}



async function start(){
    console.log('Starting')
    await initializeDatabase()
    await migrate(sequelize)


    await syncProducts()

    console.log('Ending')
}

start().then(()=>{
    process.exit()
})




