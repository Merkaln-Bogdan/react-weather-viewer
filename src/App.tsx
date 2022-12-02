import { Routes, Route, Navigate } from "react-router-dom";

import { Details } from "./page/Details";
import { Board } from "./page/Board";
import { routes } from "data/routes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to={routes.board} />} />
      <Route index path="/" element={<Board />} />

      <Route path="details/:id" element={<Details />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
