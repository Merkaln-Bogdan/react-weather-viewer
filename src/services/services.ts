import { fetchData } from "../http-common";

class WeatherDataService {
  private http = fetchData();

  private ep = "/data/2.5";

  public async getAllCities(ids: object) {
    return this.http.get<any>(
      `${this.ep}/group?id=${ids}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
  }

  public async getCity(id: string) {
    return this.http.get<any>(
      `${this.ep}/weather?id=${id}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
  }
  public async getNewCity(query: string) {
    return this.http.get<any>(
      `${this.ep}/weather?q=${query}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
    );
  }
}

const weatherDataService = new WeatherDataService();

export { weatherDataService };
