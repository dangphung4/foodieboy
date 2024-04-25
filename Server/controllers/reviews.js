import { supabase } from "../models/index.js";

/**
 * Gets all reviews from the database
 *
 * @param {*} req
 * @param {*} res
 * @returns a list of {Review} objects
 */
export const getAllReviews = async (req, res) => {
  const { data: reviews, error } = await supabase.from("reviews").select("*");
  if (error) {
    console.error("Error fetching reviews:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.json(reviews);
  return reviews;
};

/**
 * Gets a review by its ID
 * @param {*} req
 * @param {*} res
 * @returns {Promise<*>}
 */

export const getReviewById = async (req, res) => {
  const { id } = req.params;
  const { data: review, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error fetching review:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.json(review);
  return review;
};

/**
 * Gets a review by its user ID
 * @param {*} req
 * @param {*} res
 * @returns {Promise<*>}
 */

export const getReviewByUserId = async (req, res) => {
  const { user_id } = req.params;
  const { data: review, error } = await supabase
    .from("reviews")
    .select("*")
    .eq("user_id", user_id);
  if (error) {
    console.error("Error fetching review:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.json(review);
  return review;
};

/**
 * Creates a new review in the database
 *
 * @async
 * @param {*} req
 * @param {*} res
 * @returns {Promise<*>}
 */
export const createReview = async (req, res) => {
  const {
    name,
    website,
    description,
    images,
    rating,
    category,
    location,
    user_id,
  } = req.body;
  const { data: newReview, error } = await supabase.from("reviews").insert({
    name,
    website,
    description,
    images,
    rating,
    category,
    location,
    user_id,
  });
  if (error) {
    console.error("Error creating restaurant:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.json(newReview);
};

/**
 * Updates a review in the database
 *
 * @async
 * @param {*} req
 * @param {*} res
 * @returns {Promise<*>}
 */
export const updateReview = async (req, res) => {
  const { id } = req.params;
  const {
    name,
    website,
    description,
    images,
    rating,
    category,
    location,
  } = req.body;
  const { data: updatedReview, error } = await supabase
    .from("reviews")
    .update({
      name,
      website,
      description,
      images,
      rating,
      category,
      location,
    })
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error updating restaurant:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.json(updatedReview);
};

/**
 * Deletes a review from the database
 *
 * @async
 * @param {*} req
 * @param {*} res
 * @returns {Promise<*>}
 */
export const deleteReview = async (req, res) => {
  const { id } = req.params;
  const { data: deletedReview, error } = await supabase
    .from("reviews")
    .delete()
    .eq("id", id)
    .single();
  if (error) {
    console.error("Error deleting restaurant:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
  res.json(deletedReview);
};
