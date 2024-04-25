import express from "express";
import config from "./config/index.js";
import cors from "cors";
import swaggerUi from 'swagger-ui-express';
import reviewsRouter from "./routes/reviews.js";
import swaggerSpecs from './config/swagger.js';

/**
 * Initializes the Express app
 *
 * @type {express.Application}
 */
const app = express();

app.use(cors());

app.use(express.json());

app.get('/swagger.json', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.send(swaggerSpecs);
});

// Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, {
  swaggerOptions: {
    url: "/swagger.json", // Assuming the URL above is how you serve the Swagger spec
  },
}));


/**
 * Adds routing to express app
 * @param {string} path
 * @param {express.Router} router
 */
app.use("/reviews", reviewsRouter);

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(config.port, () => {
  console.log(`Server is running on port ${config.port}`);
  console.log(`http://localhost:${config.port}`);
});

export default app;
