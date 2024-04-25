import express from "express";
import {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} from "../controllers/reviews.js";

const router = express.Router();
/**
 *
 * need to add @swagger
 *
 */

router.get("/", getAllReviews);
router.post("/", createReview);
router.put("/:id", updateReview);
router.delete("/:id", deleteReview);

export default router;
