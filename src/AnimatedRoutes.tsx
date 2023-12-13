import React from 'react';
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion';
import HomePage from './Views/HomePage';
import FoodPickerPage from "./Views/FoodPickerPage";
import FoodListPage from './Views/FoodListPage';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route path="/food" element={<FoodPickerPage />} />
        <Route path='/food/list' element={<FoodListPage />} />
      </Routes>
    </AnimatePresence>
  );
};

export default AnimatedRoutes;
