import {NextFunction, Request, Response, Router}  from "express";
import { createPlanet, deletePlanet, getPlanet, getPlanetById, updatePlanet } from "../controllers/planetsController";

const routerPlanets = Router();

const validate = (req: Request, res: Response, next: NextFunction) =>{
  const { name } = req.body;
  if(!name) return res.status(404).json({ message: "missing name, Please add the name"});
  next();
};



/**
 * Get
 * @openapi
 * /planets:
 *    get:
 *      tags:
 *        - Planets
 *      summary: Get all planets
 *      description: Array with all exist planets
 *      responses:
 *        "200":
 *            description: Return array Planets.
 *            
 *        "404":
 *            description: Error because Planets not founded or not existing
 *        "500":
 *            description: Internal server Error
 *  
 */
routerPlanets.get("/", getPlanet);

/**
 *  Get
 * @openapi
 * /planets/{id}:
 *    get:
 *      tags:
 *        - Planets
 *      summary: Find planet by ID
 *      description: Returns a single Planet
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of planet to return
 *          required: true
 *          schema:
 *              type: string
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/planet"
 *        "404":
 *            description: Error because Planets not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerPlanets.get("/:id", getPlanetById);

/**
 * Post
 * @openapi
 * /planets:
 *    post:
 *      tags:
 *        - Planets
 *      summary: Create Planet
 *      requestBody:
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: "#/components/schemas/planet"
 *      responses:
 *        "201":
 *            description: "Planet Created"
 *        "400":
 *            description: Name is required
 *        "500": 
 *            description: Internal server error
 *           
 * 
 */
routerPlanets.post("/", validate, createPlanet);

/**
 *  PUT
 * @openapi
 * /planets/{id}:
 *    put:
 *      tags:
 *        - Planets
 *      summary: Update an existing planet
 *      description: Update an existing planet by Id
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of planet to return
 *          required: true
 *          schema:
 *              type: string
 * 
 *      requestBody:
 *          description: Update an existing planet by Id
 *          content:
 *            application/json:
 *                schema:
 *                  $ref: "#/components/schemas/planet"
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/planet"
 *        "404":
 *            description: Error because Planets not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerPlanets.put("/:id", updatePlanet);

/**
 *  Delete
 * @openapi
 * /planets/{id}:
 *    delete:
 *      tags:
 *        - Planets
 *      summary: Deletes a  planet
 *      description: delete a planet
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Planet id to delete
 *          required: true
 *          schema:
 *              type: string
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/planet"
 *        "404":
 *            description: Error because Planets not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerPlanets.delete("/:id", deletePlanet);


export {routerPlanets};

