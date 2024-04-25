
/**
 * Props for the FoodButton component.
 * Honestly pretty useless because currently foodbutton is just a button
 * TODO will most likely have to change the name as convention is inconsistent and incorrect
 * @typedef {Object} FoodButtonProps
 * @property {string} label - The label of the button
 * @property {() => void} [onClick] - The function to call when the button is clicked
 * @example
 * <FoodButton label="Click me" onClick={() => console.log("Clicked")} />
 */
export type FoodButtonProps = {
  label: string;
  onClick?: () => void;
};
