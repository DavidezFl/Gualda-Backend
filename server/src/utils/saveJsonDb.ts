import fs from "fs";
import { Film } from "../models/Films";
import { Planet } from "../models/Planets";
import { StarShip } from "../models/StarShips";

interface FilmsData {
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  created: Date,
  edited: Date,
}

interface PlanetsData {
  name: String,
  rotation_period: Number,
  orbital_period: Number,
  diameter: Number,
  climate: String,
  gravity: String,
  terrain: String,
  surface_water: String,
  population: String,
  created: Date,
  edited: Date,
}

interface StarShipsData {
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
    created:Date,
  edited:Date
}


const readJsonFile = async <T>(filePath: string): Promise<T[]> => {
  const jsonData = await fs.promises.readFile(filePath, "utf8");
  const data = JSON.parse(jsonData) as T[];
  return data;
};


const saveJsonDb = async () => {
  try {
    const films = await readJsonFile<FilmsData>("./dataJson/films.json");
    const planets = await readJsonFile<PlanetsData>("./dataJson/planets.json");
    const starShips = await readJsonFile<StarShipsData>("./dataJson/starships.json");

    await StarShip.deleteMany({});
    await StarShip.insertMany(starShips);

    await Planet.deleteMany({});
    await Planet.insertMany(planets);

    await Film.deleteMany({});
    await Film.insertMany(films);

    console.log("DataJson saved successfully");
  } catch (error) {
    console.error("Error saving DataJson", error);
  }
};

export  {saveJsonDb};