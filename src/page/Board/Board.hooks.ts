import { useContext, useState } from "react";
import { useAppSelector } from "redux/hooks";

import { StorageContext } from "contexts/StorageContext";

import { weatherDataService } from "services/services";

const useBoard = () => {
  const storageContext = useContext(StorageContext);
  const { removeData, putData } = storageContext;

  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  const { loading, cities } = useAppSelector((state) => state.citiesSlice);

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
