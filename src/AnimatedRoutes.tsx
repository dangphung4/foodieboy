import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./Views/HomePage";
import FoodPickerPage from "./Views/FoodPickerPage";
import RestaurantListPage from "./Views/RestaurantListPage";



/**
 * Animated routes
 * These are routes that will be used to source the bulk of the application
 * @returns {JSX.Element}
 */
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/foods" element={<RestaurantListPage />} />
        <Route path="/food" element={<FoodPickerPage />} />

        {/*  Have this here to have authenticated routes */}
        {/*     <Route path="/food" element={
          <ProtectedRoute>
            <FoodPickerPage />
          </ProtectedRoute>
        } /> */}
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
