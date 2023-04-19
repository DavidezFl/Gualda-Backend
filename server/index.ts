import "dotenv/config"

import {app} from "./src/app";
import { connectDatabase } from "./src/db";
import { saveJsonDb } from "./src/utils/saveJsonDb";

const PORT = process.env.PORT || 3001;

connectDatabase().then(() => {
 //Upload JSON to MongoDb... //If you want you can comment when you are in dev mode after used it 1 time..
  saveJsonDb();   
  app.listen(PORT, () =>{
  console.log(`Listening on http://localhost:${PORT}`);
})
});