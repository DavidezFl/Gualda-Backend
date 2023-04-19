import { NextFunction, Request, Response, Router } from "express";
import { deleteFilm, getFilm, getFilmById, postFilm, updateFilm } from "../controllers/filmsController";

const routerFilm = Router();

const validate = (req: Request, res: Response, next: NextFunction) =>{
  const { title } = req.body;
  if(!title) return res.status(404).json({ message: "missing title, Please add the title"});
  next();
};



/**
 * Get
 * @openapi
 * /films:
 *    get:
 *      tags:
 *        - Films
 *      summary: Get all films
 *      description: Array with all exist films
 *      responses:
 *        "200":
 *            description: Return array Films.
 *            
 *        "404":
 *            description: Error because Films not founded or not existing
 *        "500":
 *            description: Internal server Error
 *  
 * 
 */
routerFilm.get("/", getFilm);


/**
 *  Get
 * @openapi
 * /films/{id}:
 *    get:
 *      tags:
 *        - Films
 *      summary: Find film by ID
 *      description: Returns a single Film
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of film to return
 *          required: true
 *          schema:
 *              type: string
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/film"
 *        "404":
 *            description: Error because Films not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerFilm.get("/:id", getFilmById);

/**
 * Post
 * @openapi
 * /films:
 *    post:
 *      tags:
 *        - Films
 *      summary: Create Film
 *      requestBody:
 *          content:
 *            application/json:
 *                schema:
 *                    $ref: "#/components/schemas/film"
 *      responses:
 *        "201":
 *            description: "Film Created"
 *        "400":
 *            description: Title is required
 *        "500": 
 *            description: Internal server error
 *           
 * 
 */
routerFilm.post("/", validate, postFilm);

/**
 *  PUT
 * @openapi
 * /films/{id}:
 *    put:
 *      tags:
 *        - Films
 *      summary: Update an existing film
 *      description: Update an existing film by Id
 *      parameters:
 *        - name: id
 *          in: path
 *          description: ID of film to return
 *          required: true
 *          schema:
 *              type: string
 * 
 *      requestBody:
 *          description: Update an existing film by Id
 *          content:
 *            application/json:
 *                schema:
 *                  $ref: "#/components/schemas/film"
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/film"
 *        "404":
 *            description: Error because Films not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerFilm.put("/:id", updateFilm);


/**
 *  Delete
 * @openapi
 * /films/{id}:
 *    delete:
 *      tags:
 *        - Films
 *      summary: Deletes a  film
 *      description: delete a film
 *      parameters:
 *        - name: id
 *          in: path
 *          description: Film id to delete
 *          required: true
 *          schema:
 *              type: string
 *      responses:
 *        "200":
 *            description: successful operation
 *            content:
 *              application/json:
 *                schema:
 *                     $ref: "#/components/schemas/film"
 *        "404":
 *            description: Error because Films not founded or not existing
 *        "500":
 *            description: Internal server Error
 * 
 */
routerFilm.delete("/:id", deleteFilm);

export {routerFilm};