import swaggerJSDoc from 'swagger-jsdoc';

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Champions League API',
      version: '1.0.0',
      description: 'API simulando dados da Champions League (via Express + json-server)'
    },
    servers: [
      {
        url: 'http://localhost:3000',
      }
    ],
  },
  apis: ['./src/routes/*.ts'],
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
