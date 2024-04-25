// CategoryDropdown.tsx
import { Select } from "@chakra-ui/react";

const categories = [
  "All",
  "American",
  "Asian",
  "European",
  "Mexican",
  "Indian",
  "Middle Eastern",
];

/**
 * Category dropdown
 * This is a dropdown that allows the user to select a category
 * @param {string} value - The value of the dropdown
 * @param {function} onChange - The function to call when the dropdown changes
 * @param {number} mb - The margin bottom
 * @param {boolean} disableAll - Whether to disable the "All" category
 * @returns {React.ReactElement} The category dropdown
 */
interface CategoryDropdownProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  mb?: number; // Add the mb prop as optional
  disableAll?: boolean; // Add the disableAll prop as optional
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({
  value,
  onChange,
  mb,
  disableAll = false,
}) => {
  const filteredCategories = disableAll
    ? categories.filter((category) => category !== "All")
    : categories;

  return (
    <Select
      placeholder="Select category"
      value={value}
      onChange={onChange}
      mb={mb}
    >
      {filteredCategories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;
