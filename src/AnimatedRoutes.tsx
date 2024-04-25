import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import HomePage from "./Views/HomePage";
import RestaurantListPage from "./Views/RestaurantListPage";
import CreateReviewPage from "./Views/CreateReviewPage";
import { useAuth } from "./context/AuthContext";

/**
 * Animated routes
 * These are routes that will be used to source the bulk of the application
 * @returns {JSX.Element}
 */
const AnimatedRoutes = () => {
  const location = useLocation();
  const { isAdmin } = useAuth();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/foods" element={<RestaurantListPage />} />
        {isAdmin && (
          <Route path="/create-review" element={<CreateReviewPage />} />
        )}

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
