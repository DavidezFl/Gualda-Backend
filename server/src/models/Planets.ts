import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planetSchema = new Schema(
{

}
);

const Planet = mongoose.model("Planet", planetSchema);

export {Planet};