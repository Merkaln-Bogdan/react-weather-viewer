export type CityType = {
  wind: { speed: number; deg: number; gust: number };
  clouds: { all: number };
  id: string;
  name: string;
  main: {
    temp: number;
  };
  weather: [];
};
