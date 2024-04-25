
/**
 * Interface for the Restaurant object
 * @param {number} id - The id of the restaurant
 * @param {string} name - The name of the restaurant
 * @param {string} website - The website of the restaurant
 * @param {string} description - The description of the restaurant
 * @param {string} review - The review of the restaurant
 * @param {string[]} images - The images of the restaurant
 * @param {number} rating - The rating of the restaurant
 * @param {string} category - The category of the restaurant
 * @param {string} user_id - The user id of the restaurant
 * @param {string} location - The location of the restaurant
 */
export interface Restaurant {
  id: string;
  name: string;
  website: string;
  description: string;
  review: string;
  images: string[];
  rating: number;
  category: string;
  user_id: string;
  location: string;
}