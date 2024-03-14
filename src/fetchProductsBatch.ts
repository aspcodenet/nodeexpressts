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




