import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planetSchema = new Schema(
{
name: {
  type: String,
  required: true,
},
rotation_period: String,
orbital_period: String,
diameter: String,
climate: String,
gravity: String,
terrain: String,
surface_water: String,
population: String,
created: { type: Date, default: Date.now },
edited: { type: Date, default: Date.now },
},
{ timestamps: false }
);

const Planet = mongoose.model("Planet", planetSchema);

export {Planet};