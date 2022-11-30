import { useEffect, useState } from "react";

import { weatherDataService } from "./services/services";
import { routes } from "./data/routes";

import { Details } from "./page/Details";
import { Routes, Route } from "react-router-dom";
import { Board } from "./page/Board";

import { StorageProvider } from "contexts/StorageContext";

function App() {
  return (
    <StorageProvider>
      <Routes>
        <Route path={routes.board} element={<Board />} />

        <Route path="details/:id" element={<Details />} />
      </Routes>
    </StorageProvider>
  );
}

export default App;
