import mongoose from "mongoose";

const Schema = mongoose.Schema;

const starShipSchema = new Schema(
  {
    name:{type: String, required: true},
    model: String,
    manufacturer: String,
    cost_in_credits: String,
    length: String,
    max_atmosphering_speed: String,
    crew: String,
    passengers: String,
    cargo_capacity: Number,
    consumables: String,
    hyperdrive_rating: Number,
    MGLT: Number,
    starship_class: String,
    created: { type: Date, default: Date.now },
  edited: { type: Date, default: Date.now },
  },
{ timestamps: false }
);

export const StarShip = mongoose.model("StarShip", starShipSchema);

export const deleteStarShipById = (id: string) => StarShip.findOneAndDelete({ _id: id});