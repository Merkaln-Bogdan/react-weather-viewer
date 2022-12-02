import { useContext, useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "redux/hooks";

import { StorageContext } from "contexts/StorageContext";

import { getCities } from "redux/slices/cities";
import { weatherDataService } from "services/services";

const useBoard = () => {
  const dispatch = useAppDispatch();

  const storageContext = useContext(StorageContext);
  const { storegedData, removeData, putData } = storageContext;

  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { loading, cities } = useAppSelector((state) => state.citiesSlice);

  useEffect(() => {
    dispatch(getCities(storegedData!));
  }, [storegedData, dispatch]);

  const handleAddCity = () => {
    weatherDataService.getNewCity(query).then((res) => putData(res.data.id));
    setIsSearchOpen(false);
  };

  return {
    cities,
    loading,
    setQuery,
    handleAddCity,
    removeData,
    setIsSearchOpen,
    isSearchOpen,
  };
};
export { useBoard };
