import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { getCity } from "redux/slices/city";

const useDetails = () => {
  const { id } = useParams();
  const dispatch = useAppDispatch();

  const { loading, city } = useAppSelector((state) => state.citySlice);

  useEffect(() => {
    dispatch(getCity(id!));
  }, [dispatch, id]);

  const updateInfo = () => {
    dispatch(getCity(id!));
  };

  return { city, updateInfo, loading };
};
export { useDetails };
