import mongoose from "mongoose";

const Schema = mongoose.Schema;

const planetSchema = new Schema(
{
name: {
  type: String,
  required: true,
},
rotation_period: Number,
orbital_period: Number,
diameter: Number,
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

export const Planet = mongoose.model("Planet", planetSchema);

export const deletePlanetById = (id: string) => Planet.findOneAndDelete({ _id: id});

