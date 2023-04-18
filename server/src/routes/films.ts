import { Router } from "express";
import { deleteFilm, getFilm, getFilmById, postFilm, updateFilm } from "../controllers/filmsController";

const routerFilm = Router();

routerFilm.get("/", getFilm);
routerFilm.get("/:id", getFilmById);
routerFilm.put("/:id", updateFilm);
routerFilm.post("/", postFilm);
routerFilm.delete("/:id", deleteFilm);

export {routerFilm};