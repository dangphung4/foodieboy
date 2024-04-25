import express from "express";
import {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
  getReviewById,
  getReviewByUserId,
} from "../controllers/reviews.js";

const router = express.Router();
/**
 * @swagger
 * tags:
 *   name: Reviews
 *   description: Review management
 */

/**
 * @swagger
 * /reviews:
 *   get:
 *     tags: [Reviews]
 *     summary: Retrieve all reviews
 *     responses:
 *       200:
 *         description: A list of reviews
 */
router.get("/", getAllReviews);

/**
 * @swagger
 * /reviews/{id}:
 *   get:
 *     summary: Retrieve a review by its ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique id of the review
 *     responses:
 *       200:
 *         description: A single review

 *       404:
 *         description: Review not found
 */
router.get("/:id", getReviewById);

/**
 * @swagger
 * /reviews/users/{user_id}:
 *   get:
 *     summary: Retrieve a review by user ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: user_id
 *         required: true
 *         schema:
 *           type: string
 *           description: Unique user id of the review author
 *     responses:
 *       200:
 *         description: A list of reviews by the specified user

 *       404:
 *         description: Review not found
 */

router.get("/users/:user_id", getReviewByUserId);
/**
 * @swagger
 * /reviews/create/:
 *   post:
 *     summary: Create a new review
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               website:
 *                 type: string
 *               description:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               rating:
 *                 type: integer
 *               category:
 *                 type: string
 *               location:
 *                 type: string
 *               user_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created review object
 */
router.post("/create/", createReview);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review by ID
 *     tags: [Reviews]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               website:
 *                 type: string
 *               description:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               rating:
 *                 type: integer
 *               category:
 *                 type: string
 *               location:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated review object
 */
router.put("/:id", updateReview);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
 *     tags: [Reviews]
 *     summary: Delete a review by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Deleted review object
 */
router.delete("/:id", deleteReview);

export default router;
