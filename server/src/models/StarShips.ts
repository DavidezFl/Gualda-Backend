import mongoose from "mongoose";

const Schema = mongoose.Schema;

const starShipSchema = new Schema(
{

}
);

const StarShip = mongoose.model("StarShip", starShipSchema);

export {StarShip};