import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from './Views/HomePage';
import FoodPickerPage from "./Views/FoodPickerPage";
import RestaurantListPage from './Views/RestaurantListPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPickerPage />} />
        <Route path='/food/list' element={<RestaurantListPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
