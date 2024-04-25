import express from "express";
import config from "./config/index.js";
import reviewsRouter from "./routes/reviews.js";


/**
 * Initializes the Express app
 *
 * @type {express.Application}
 */
const app = express();

app.use(express.json());

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
