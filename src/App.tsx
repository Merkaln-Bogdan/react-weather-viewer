import { useContext, useEffect } from "react";

import { Routes, Route, Navigate } from "react-router-dom";
import { useAppDispatch } from "redux/hooks";

import { StorageContext } from "contexts/StorageContext";
import { Details } from "./page/Details";

import { Board } from "./page/Board";
import { routes } from "data/routes";
import { getCities } from "redux/slices/cities";

function App() {
  const dispatch = useAppDispatch();

  const storageContext = useContext(StorageContext);
  const { storagedData } = storageContext;

  useEffect(() => {
    if (storagedData && storagedData!.length > 0) {
      dispatch(getCities(storagedData!));
    }
  }, [storagedData, dispatch]);
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
