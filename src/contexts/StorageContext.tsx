/* eslint @typescript-eslint/no-explicit-any: 0 */
import { createContext, useEffect, useState } from "react";

export type Bucket = {
  storagedData: object;
  putData: (arg: any) => void;
  removeData: (arg: any) => void;
  setStoragedData: (arg: any) => void;
};

const defaultState: Bucket = {
  storagedData: [],
  putData: () => null,
  removeData: () => null,
  setStoragedData: () => null,
};
const initialStorage = [702550, 703448, 2643743];

export const StorageContext = createContext(defaultState);

type StorageProps = {
  children: React.ReactNode;
};

export const StorageProvider: React.FunctionComponent<StorageProps> = ({
  children,
}) => {
  const citiesLocalStorage = localStorage.getItem("cities");
  const parsedStorage = JSON.parse(citiesLocalStorage!);

  if (parsedStorage === null || undefined) {
    localStorage.setItem("cities", JSON.stringify(initialStorage));
  }

  const [storagedData, setStoragedData] = useState<any>(
    parsedStorage && parsedStorage
  );

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(storagedData));
  }, [storagedData]);

  const putData = (id: any) => {
    const isInStorage = storagedData?.some((el: any) => el.id === id);

    if (isInStorage) {
      alert("Це місто вже є у списку");
    } else {
      setStoragedData((prevState: any) => [...prevState, id]);
    }
  };

  const removeData = (id: string) => {
    const filteredData = storagedData.filter((el: any) => el !== id);

    setStoragedData(filteredData);
  };

  const state: Bucket = {
    storagedData,
    putData,
    removeData,
    setStoragedData,
  };

  return (
    <StorageContext.Provider value={state}>{children}</StorageContext.Provider>
  );
};
