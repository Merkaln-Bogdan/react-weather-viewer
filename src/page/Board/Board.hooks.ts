import { useContext, useEffect, useState } from "react";
import { useAppSelector } from "redux/hooks";

import { StorageContext } from "contexts/StorageContext";

import { weatherDataService } from "services/services";

const useBoard = () => {
  const storageContext = useContext(StorageContext);
  const { removeData, putData } = storageContext;

  const [query, setQuery] = useState("");
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isMessageOpen, setisMessageOpen] = useState<boolean>(false);

  const { loading, cities } = useAppSelector((state) => state.citiesSlice);

  const handleAddCity = () => {
    weatherDataService.getNewCity(query).then((res) => putData(res.data.id));
    setIsSearchOpen(false);
  };

  useEffect(() => {
    if (cities.length === 1) {
      setisMessageOpen(true);
    }
    const timer = setTimeout(() => {
      setisMessageOpen(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [cities]);

  return {
    cities,
    loading,
    setQuery,
    handleAddCity,
    removeData,
    setIsSearchOpen,
    isSearchOpen,
    isMessageOpen,
  };
};
export { useBoard };
