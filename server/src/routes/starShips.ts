import { Router } from "express";
import { createStarShip, deleteStarShip, getStarShip, getStarShipById, updateStarShip } from "../controllers/starShipsController";

const routerStarShips = Router();

routerStarShips.get("/", getStarShip);
routerStarShips.get("/:id", getStarShipById);
routerStarShips.post("/", createStarShip);
routerStarShips.put("/:id", updateStarShip);
routerStarShips.delete("/:id", deleteStarShip);

export {routerStarShips};