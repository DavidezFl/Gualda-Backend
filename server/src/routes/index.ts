import { Router } from "express";
import { routerFilm } from "./films";
import { routerPlanets } from "./planets";
import { routerStarShips } from "./starShips";

const router = Router()

router.use("/films", routerFilm);
router.use("/starShips", routerStarShips);
router.use("/planets", routerPlanets);

router.use("/", (req, res)=>{
  res.send("Backend by David")
})

export { router };