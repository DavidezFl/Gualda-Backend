import swaggerJSDoc, { OAS3Definition, OAS3Options } from "swagger-jsdoc";

const swaggerDefinition: OAS3Definition = {
  openapi: "3.0.0",
  info: {
    title: "Documentacion de Api Rest Gualda",
    version: "1.0.0",
  },
  servers: [
    {
      url: `http://localhost:${process.env.PORT}`,
    },
  ],
  components: {
    schemas: {
      film: {
        type: "object",
        required: ["title"],
        properties: {
          title: {
            type: "string",
          },
          episode_id: {
            type: "number",
          },
          opening_crawl: {
            type: "string",
          },
          director: {
            type: "string",
          },
          producer: {
            type: "string",
          },
          release_date: {
            type: "string",
          },
          created: {
            type: "string",
            format: "date-time",
          },
          edited: {
            type: "string",
            format: "date-time",
          },
        },
      },
      planet: {
        type: "object",
        required: ["name"],
        properties: {
          name: { type: "string" },
          rotation_period: {
            type: "number",
          },
          orbital_period: {
            type: "number",
          },
          diameter: {
            type: "number",
          },
          climate: { type: "string" },
          gravity: { type: "string" },
          terrain: { type: "string" },
          surface_water: { type: "string" },
          population: { type: "string" },
          created: {
            type: "string",
            format: "date-time",
          },
          edited: {
            type: "string",
            format: "date-time",
          },
        },
      },
      starShip: {
        type: "object",
        required: ["name"],
        properties: {
          name: { type: "string" },
          model: { type: "string" },
          manufacturer: { type: "string" },
          cost_in_credits: { type: "string" },
          length: { type: "string" },
          max_atmosphering_speed: { type: "string" },
          crew: { type: "string" },
          passengers: { type: "string" },
          cargo_capacity: {
            type: "number",
          },
          consumables: { type: "string" },
          hyperdrive_rating: {
            type: "number",
          },
          MGLT: {
            type: "number",
          },
          starship_class: { type: "string" },
          created: {
            type: "string",
            format: "date-time",
          },
          edited: {
            type: "string",
            format: "date-time",
          },
        },
      },
    },
  },
};

const swaggerOptions: OAS3Options = {
  swaggerDefinition,
  apis: ["./src/routes/*.ts"],
};

export default swaggerJSDoc(swaggerOptions);
