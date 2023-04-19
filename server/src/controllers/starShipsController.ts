/**
 *
 *  Get: All StarShips
 *  Get: StarShips por id => id,
 *  Post: Create StarShip,
 *  Update: Update StarShip by id,
 *  Delete: Delete StarShip by id,
 *
 */

import { Request, Response } from "express";
import { deleteStarShipById, StarShip } from "../models/StarShips";
import { handleHttp } from "../utils/error.handle";

const getStarShip = async (req: Request, res: Response) =>{
  try{
    const allStarShips = await StarShip.find().sort({ name: 'asc' });
    
    return allStarShips 
      ? res.status(200).send(allStarShips)
      : res.status(404).json({message: "StarShip not found"})
  } catch(e){
    handleHttp(res, "ERROR_GET_STARSHIP");
    console.log(e);
  }
};

const getStarShipById = async (req: Request, res: Response) =>{
  const { id } = req.params;
  try{
    const starShipId = await StarShip.findById(id);

    if(!starShipId) return res.status(404).json({message: "StarShip NOT FOUND"});

    res.status(200).send(starShipId);
  }catch(e){
    handleHttp(res, "ERROR_GET_STARSHIP");
    console.log(e)
  }
};

const createStarShip = async ({body}: Request, res: Response) =>{
  const { name, model, manufacturer, cost_in_credits, length, max_atmosphering_speed, crew, passengers, cargo_capacity,consumables,hyperdrive_rating, MGLT, starship_class, created, edited } = body;
  try{
if(!name) return res.status(400).json({ message: "name is required"});

  const newStarShip = new StarShip({
    name,
    model,
    manufacturer,
    cost_in_credits,
    length,
    max_atmosphering_speed,
    crew,
    passengers,
    cargo_capacity,
    consumables,
    hyperdrive_rating,
    MGLT,
    starship_class,
    created,
    edited
  });


 
    const savedStarShip = await newStarShip.save();
    res.status(201).json(savedStarShip);
  }catch(e){
    handleHttp(res, "ERROR_POST_STARSHIP");
    console.log(e)
  }
};

const updateStarShip = async (req: Request, res: Response) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const updatedStarShip = await StarShip.findByIdAndUpdate(id, updates, { new: true });

    updatedStarShip
    ? res.status(200).json(updatedStarShip)
    : res.status(404).json({ message: "StarShip not found" });
    
  } catch (e) {
    handleHttp(res, "ERROR_PUT_STARSHIP");
    console.log(e);
  }
};

const deleteStarShip = async (req: Request, res: Response) =>{
  const { id} = req.params;
  try{
    const deletedStarShip = await deleteStarShipById(id);

    deletedStarShip
    ? res.status(200).json(deletedStarShip)
    : res.status(404).json({ message: "StarShip NOT FOUND"})
  }catch(e){
    handleHttp(res, "ERROR_DELETE_STARSHIP");
    console.log(e);
  }
};


export {getStarShip,getStarShipById, createStarShip, updateStarShip, deleteStarShip};