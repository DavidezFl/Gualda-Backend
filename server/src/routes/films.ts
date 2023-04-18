import { Router } from "express";
import { deleteFilm, getFilm, getFilmById, postFilm, updateFilm } from "../controllers/filmsController";

const routerFilm = Router();

routerFilm.get("/", getFilm);
routerFilm.get("/:id", getFilmById);
routerFilm.post("/", postFilm);
routerFilm.put("/:id", updateFilm);
routerFilm.delete("/:id", deleteFilm);

export {routerFilm};