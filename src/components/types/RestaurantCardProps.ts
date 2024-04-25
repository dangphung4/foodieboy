import { Restaurant } from "./Restaurant";

/**
 * Restaurant card properties
 * This is the properties for the restaurant card
 * @param {Restaurant} restaurant - The restaurant
 * @param {string} linkColor - The color of the link
 */
export interface RestaurantCardProps {
  restaurant: Restaurant;
  linkColor: string;
}
