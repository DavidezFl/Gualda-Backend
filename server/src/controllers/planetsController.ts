/**
 * TODO: RUTAS A CREAR
 * ! Get: All Planets
 * ! Get: Planets por id => id,
 * ! Post: Create Planet,
 * ! Update: Update Planet by id,
 * ! Delete: Delete Planet by id,
 *
 */

import { Request, Response } from "express";
import { deletePlanetById, Planet } from "../models/Planets";
import { handleHttp } from "../utils/error.handle";

const getPlanet = async (req: Request, res: Response) =>{
  try{
    const allPlanets = await Planet.find().sort({ name: 'asc' });
    
    return allPlanets 
      ? res.status(200).send(allPlanets)
      : res.status(400).send("Planet not found")
  } catch(e){
    handleHttp(res, "ERROR_GET_PLANET");
    console.log(e);
  }
};

const getPlanetById = async (req: Request, res: Response) =>{
  const { id } = req.params;
  try{
    const planetById = await Planet.findById(id);

    if(!planetById) return res.status(404).send("Planet NOT FOUND");

    res.status(200).send(planetById);
  }catch(e){
    handleHttp(res, "ERROR_GET_PLANET");
    console.log(e)
  }
};

const createPlanet = async ({body}: Request, res: Response) =>{
  const { name, rotation_period, orbital_period, diameter, climate, gravity, terrain, surface_water, population, created, edited } = body;

  const newPlanet = new Planet({
    name,
    rotation_period,
    orbital_period,
    diameter,
    climate,
    gravity,
    terrain,
    surface_water,
    population,
    created,
    edited
  });


  try{
    const savedPlanet = await newPlanet.save();
    res.status(201).json(savedPlanet);
  }catch(e){
    handleHttp(res, "ERROR_POST_PLANET");
    console.log(e)
  }
};

const updatePlanet = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedPlanet = await Planet.findByIdAndUpdate(id, updates, { new: true });

    updatedPlanet
    ? res.status(200).json(updatedPlanet)
    : res.status(404).json({ message: "Planet not found" });
    
  } catch (e) {
    handleHttp(res, "ERROR_PUT_PLANET");
    console.log(e);
  }
};

const deletePlanet = async (req: Request, res: Response) =>{
  const { id} = req.params;
  try{
    const deletedPlanet = await deletePlanetById(id);

    deletedPlanet
    ? res.status(200).json(deletedPlanet)
    : res.status(404).json({ message: "Planet NOT FOUND"})
  }catch(e){
    handleHttp(res, "ERROR_DELETE_PLANET");
    console.log(e);
  }
};


export {getPlanet, getPlanetById, createPlanet, updatePlanet, deletePlanet};