// CategoryDropdown.tsx
import { Select } from "@chakra-ui/react";

const categories = [
  "All",
  "American",
  "Korean",
  "Japanese",
  "Chinese",
  "Mexican",
  "Italian",
  "Indian",
  "Thai",
  "Vietnamese",
  "Mediterranean",
  "Middle Eastern",
  "French",
  "Spanish",
  "Greek",
  "Caribbean",
  "African",
  "Nepalese",
];

interface CategoryDropdownProps {
  value: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
  mb?: number; // Add the mb prop as optional
}

const CategoryDropdown: React.FC<CategoryDropdownProps> = ({ value, onChange, mb }) => {
  return (
    <Select placeholder="Select category" value={value} onChange={onChange} mb={mb}>
      {categories.map((category) => (
        <option key={category} value={category}>
          {category}
        </option>
      ))}
    </Select>
  );
};

export default CategoryDropdown;