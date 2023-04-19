import { Router } from "express";
import {NextFunction, Request, Response}  from "express";
import { createStarShip, deleteStarShip, getStarShip, getStarShipById, updateStarShip } from "../controllers/starShipsController";

const routerStarShips = Router();

const validate = (req: Request, res: Response, next: NextFunction) =>{
  const { name } = req.body;
  if(!name) return res.status(404).json({ message: "missing name, Please add the name"});
  next();
};



/**
 * Get
 * @openapi
 * /starShips:
 *    get:
 *      tags:
 *        - StarShips
 *      summary: Get all starShips
 *      description: Array with all exist starShips
 *      responses:
 *        "200":
 *            description: Return array StarShips.
 *            
 *        "404":
 *            description: Error because StarShips not founded or not existing
 *        "500":
 *            description: Internal server Error
 *  
 * 
 */
routerStarShips.get("/", getStarShip);

/**
 *  Get
 * @openapi
 * /starShips/{id}:
 *    get:
 *      tags:
 *        - StarShips
 *      summary: Find starShip by ID
 *      description: Returns a single starShip
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of starShip to return
 *          required: true
 *          schema:
 *              type: string
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/starShip"
 *        "404":
 *            description: Error because StarShips not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerStarShips.get("/:id", getStarShipById);

/**
 * Post
 * @openapi
 * /starShips:
 *    post:
 *      tags:
 *        - StarShips
 *      summary: Create StarShip
 *      requestBody:
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: "#/components/schemas/starShip"
 *      responses:
 *        "201":
 *            description: "StarShip Created"
 *        "400":
 *            description: name is required
 *        "500": 
 *            description: Internal server error
 *           
 * 
 */
routerStarShips.post("/", validate, createStarShip);

/**
 *  PUT
 * @openapi
 * /starShips/{id}:
 *    put:
 *      tags:
 *        - StarShips
 *      summary: Update an existing starShip
 *      description: Update an existing starShip by Id
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of starShip to return
 *          required: true
 *          schema:
 *              type: string
 * 
 *      requestBody:
 *          description: Update an existing starShip by Id
 *          content:
 *            application/json:
 *                schema:
 *                  $ref: "#/components/schemas/starShip"
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/starShip"
 *        "404":
 *            description: Error because StarShips not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerStarShips.put("/:id", updateStarShip);

/**
 *  Delete
 * @openapi
 * /starShips/{id}:
 *    delete:
 *      tags:
 *        - StarShips
 *      summary: Deletes a  starShip
 *      description: delete a starShip
 *      parameters:
 *        - name: id
 *          in: path
 *          description: StarShip id to delete
 *          required: true
 *          schema:
 *              type: string
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/starShip"
 *        "404":
 *            description: Error because StarShips not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerStarShips.delete("/:id", deleteStarShip);

export {routerStarShips};