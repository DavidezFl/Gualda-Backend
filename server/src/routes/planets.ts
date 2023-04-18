import {Router}  from "express";
import { createPlanet, deletePlanet, getPlanet, getPlanetById, updatePlanet } from "../controllers/planetsController";

const routerPlanets = Router();

routerPlanets.get("/", getPlanet);
routerPlanets.get("/:id", getPlanetById);
routerPlanets.post("/", createPlanet);
routerPlanets.put("/:id", updatePlanet);
routerPlanets.delete("/:id", deletePlanet);


export {routerPlanets};

