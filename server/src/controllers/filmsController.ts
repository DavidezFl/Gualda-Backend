/**
 * TODO: RUTAS A CREAR
 * ! Get: All Films
 * ! Get: films por id => id,
 * ! Post: Create Film,
 * ! Update: Update film by id,
 * ! Delete: Delete film by id,
 *
 */


import { Request, Response } from "express";
import { deleteFilmById, Film } from "../models/Films";
import { handleHttp } from "../utils/error.handle";

const getFilm = async (_req: Request, res: Response) =>{
  try{
  const allFilms = await Film.find();

  return allFilms 
  ? res.status(200).send(allFilms)
  : res.status(400).send("Films not found")
  }catch(e){
    handleHttp(res, "ERROR_GET_FILM");
    console.log(e);
  }
};

const getFilmById = async (req: Request, res: Response) =>{
  const { id } = req.params;
  try{
    const filmById = await Film.findById(id);

    if(!filmById) return res.status(404).send("Film NOT FOUND");

    res.status(200).send(filmById);
  }catch(e){
    handleHttp(res, "ERROR_GET_FILM");
    console.log(e)
  }
};

const postFilm = async ({body}: Request, res: Response) =>{
  const { title, episode_id, opening_crawl, director, producer, release_date, created, edited } = body;

  const newFilm = new Film({
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    created,
    edited
  });


  try{
    const savedFilm = await newFilm.save();
    res.status(201).json(savedFilm);
  }catch(e){
    handleHttp(res, "ERROR_POST_FILM");
    console.log(e)
  }
};

const updateFilm = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedFilm = await Film.findByIdAndUpdate(id, updates, { new: true });

    updatedFilm
    ? res.status(200).json(updatedFilm)
    : res.status(404).json({ message: "Film not found" });
    
  } catch (e) {
    handleHttp(res, "ERROR_PUT_FILM");
    console.log(e);
  }
};

const deleteFilm = async (req: Request, res: Response) =>{
  const { id} = req.params;
  try{
    const deletedFilm = await deleteFilmById(id);

    deletedFilm
    ? res.status(200).json(deletedFilm)
    : res.status(404).json({ message: "Film NOT FOUND"})
  }catch(e){
    handleHttp(res, "ERROR_DELETE_FILM");
    console.log(e);
  }
};

//
export {getFilm, getFilmById, postFilm, updateFilm, deleteFilm};