import "dotenv/config"
import fs from "fs";
import { Film } from "../models/Films";

interface FilmsData {
  title: String,
  episode_id: Number,
  opening_crawl: String,
  director: String,
  producer: String,
  release_date: String,
  
}


const saveJsonDb = async () => {
  try {
    const jsonData = await fs.promises.readFile("./dataJson/films.json", "utf8");
    const films = JSON.parse(jsonData) as FilmsData[];

      await Film.deleteMany({});
      await Film.insertMany(films);

      console.log("Films saved successfully");
  } catch (error) {
    console.error("Error saving films", error);
  }
};

export  {saveJsonDb};