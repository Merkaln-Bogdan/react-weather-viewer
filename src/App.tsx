import { routes } from "./data/routes";
import { Routes, Route } from "react-router-dom";

import { Details } from "./page/Details";
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
