// routes/reviews.js
import express from 'express';
import {
  getAllReviews,
  createReview,
  updateReview,
  deleteReview,
} from '../controllers/reviews.js';

const router = express.Router();

/**
 * @swagger
 * /reviews:
 *   get:
 *     summary: Retrieve all reviews
 *     responses:
 *       200:
 *         description: A list of reviews
 */
router.get('/', getAllReviews);

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Create a new review
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
 *               review:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               rating:
 *                 type: integer
 *               category:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created review object
 */
router.post('/', createReview);

/**
 * @swagger
 * /reviews/{id}:
 *   put:
 *     summary: Update a review by ID
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
 *               review:
 *                 type: string
 *               images:
 *                 type: array
 *                 items:
 *                   type: string
 *               rating:
 *                 type: integer
 *               category:
 *                 type: string
 *     responses:
 *       200:
 *         description: Updated review object
 */
router.put('/:id', updateReview);

/**
 * @swagger
 * /reviews/{id}:
 *   delete:
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
router.delete('/:id', deleteReview);

export default router;