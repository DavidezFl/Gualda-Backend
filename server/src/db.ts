
import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI

const connectDatabase = async () => {
  try {
     await mongoose.connect(`${MONGO_URI}`);
    console.log("Mongo connected");
  } catch (Err) {
    console.log(Err);
  }
};

export {connectDatabase}