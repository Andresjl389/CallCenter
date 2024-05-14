import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeScreen, TransactionScreen } from "../../ui/screens";

const AppRouter: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/Transaccion" element={<TransactionScreen />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
