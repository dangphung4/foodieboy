import swaggerJSDoc from "swagger-jsdoc";

/**
 * @swagger
 * components:
 *  schemas:
 *   User:
 *   type: object
 *  properties:
 *  id:
 *  type: integer
 * description: The user ID
 */
const options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "FoodieBoy API",
      version: "1.0.0",
      description: "API documentation for the FoodieBoy project",
    },
  },
  apis: ["../Server/routes/*.js"], // Path to the API routes files
};

const specs = swaggerJSDoc(options);

export default specs;
