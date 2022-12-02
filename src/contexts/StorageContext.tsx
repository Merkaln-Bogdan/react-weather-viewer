/* eslint @typescript-eslint/no-explicit-any: 0 */
import { createContext, useEffect, useState } from "react";

export type Bucket = {
  storegedData: object;
  putData: (arg: any) => void;
  removeData: (arg: any) => void;
  setStoragedData: (arg: any) => void;
};

const defaultState: Bucket = {
  storegedData: [],
  putData: () => null,
  removeData: () => null,
  setStoragedData: () => null,
};

export const StorageContext = createContext(defaultState);

type StorageProps = {
  children: React.ReactNode;
};

export const StorageProvider: React.FunctionComponent<StorageProps> = ({
  children,
}) => {
  const initialStorage = [702550, 703448, 2643743];

  const citiesLocalStorage = localStorage.getItem("cities");

  const parsedStorage = JSON.parse(citiesLocalStorage!);

  if (parsedStorage === null || undefined) {
    localStorage.setItem("cities", JSON.stringify(initialStorage));
  }

  const [storegedData, setStoragedData] = useState<any>(parsedStorage);

  useEffect(() => {
    localStorage.setItem("cities", JSON.stringify(storegedData));
  }, [storegedData]);

  const putData = (id: any) => {
    const isInStorage = storegedData?.some((el: any) => el.id === id);

    if (isInStorage) {
      alert("Це місто вже є у списку");
    } else {
      setStoragedData((prevState: any) => [...prevState, id]);
    }
  };

  const removeData = (id: string) => {
    const filteredData = storegedData.filter((el: any) => el !== id);

    setStoragedData(filteredData);
  };

  const state: Bucket = {
    storegedData,
    putData,
    removeData,
    setStoragedData,
  };

  return (
    <StorageContext.Provider value={state}>{children}</StorageContext.Provider>
  );
};
