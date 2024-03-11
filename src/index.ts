import express  from "express";
import type {Express,Request,Response}  from "express";
import  {getAllMessages}  from "./models/message";
import { initializeDatabase, sequelize } from "./database/db";
import { migrate } from "./database/migrations/migrationhelper";


const port:Number = 3000
const app: Express = express();


app.get("/", (req: Request, res: Response) => {


    res.send("Express + TypeScript Server2");
});

app.get("/api/messages", (req: Request, res: Response) => {
    // let name = "Stefan"
    // name = 12
    // name = null
    

    // namn skla vara string eller NULL 
    // ||   
    
    // let namn : String | null = "Hejsan"
    // namn = null



    // let a : Number | null  = 100
    // a = 200
    // a = null

    res.json(getAllMessages())
});




app.listen(port, async () => {
    //await initializeDatabase()
    await migrate(sequelize)
    //await sequelize.sync()  // DROP TABLES, CREATE TABLES
    // kör en gång och sen  bortkommentera

    console.log(`[server]: Server is running at http://localhost:${port}`);
}); 


