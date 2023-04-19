
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

const connectDatabase = async () => {
  try {
     await mongoose.connect(`${MONGO_URI}`);
    console.log("MongoDb was connected");
  } catch (Err) {
    console.log("An Error appeared while connecting MongoDb, Check about it" + Err);
  }
};

export {connectDatabase}