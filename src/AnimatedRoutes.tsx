import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./Views/HomePage";
import FoodPickerPage from "./Views/FoodPickerPage";
import RestaurantListPage from "./Views/RestaurantListPage";
import ProtectedRoute from "./components/auth/ProtectedRoute";

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
