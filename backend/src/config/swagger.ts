import swaggerJsdoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { Express } from "express";

const options: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Humble Superhero API',
      version: '1.0.0',
      description: 'API documentation for superheroes',
    },
    servers: [
      {
        url: 'http://localhost:3000/api',
      },
    ],
    components: {
      schemas: {
        Superhero: {
          type: 'object',
          required: ['name', 'superpower', 'humilityScore'],
          properties: {
            name: {
              type: 'string',
              description: 'The Name of the superhero',
              example: 'Ironman',
            },
            superpower: {
              type: 'string',
              description: 'The superpower',
              example: 'Genius-level intellect',
            },
            humilityScore: {
              type: 'integer',
              description: 'A score between 1 and 10 of humility',
              minimum: 1,
              maximum: 10,
              example: 7,
            },
          },
        },
        ErrorResponse: {
          type: 'object',
          properties: {
            message: {
              type: 'string',
              description: 'Error message',
              example: 'Invalid input or duplicate name',
            },
          },
        },
      },
    },
  },
  apis: ['src/routes/*.ts'],
};

const swaggerSpec = swaggerJsdoc(options);

export function setupSwagger(app: Express) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
}