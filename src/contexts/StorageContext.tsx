/* eslint @typescript-eslint/no-explicit-any: 0 */
import { createContext, useState } from "react";

export type Bucket = {
  storegedData: any;
  putData: (arg: any) => any;
  removeData: (arg: string) => any;
  setStoragedData: (arg: any) => any;
};

const defaultState: Bucket = {
  storegedData: undefined,
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
  const citiesLocalStorage = localStorage.getItem("cities");

  const [storegedData, setStoragedData] = useState<any>(citiesLocalStorage);

  localStorage.setItem("cities", JSON.stringify(storegedData));

  const putData = (data: any) => {
    const isInStorage = storegedData?.some((el: any) => el.id === data.id);

    if (isInStorage) {
      alert("Це місто вже є у списку");
    } else {
      setStoragedData((prevState: any) => [...prevState, ...data]);
    }
  };

  const removeData = (id: string) => {
    const filteredData = storegedData.filter((el: any) => el.id !== id);
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
