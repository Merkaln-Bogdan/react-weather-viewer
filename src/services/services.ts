import { fetchData } from "../http-common";

//         `http://api.openweathermap.org/data/2.5/group?id=524901,703448,2643743&units;=metric&appid=${env.REACT_APP_API_KEY}`

class WeatherDataService {
  private http = fetchData();

  private ep = "/data/2.5";

  public async getAllCities(cities: any) {
    console.log("SERVICE ", cities);
    return this.http.get<any>(
      `${this.ep}/group?id=${cities}&units;=metric&appid=daf97ddadef2b72b75f49b906ea9eac9`
    );
  }

  public async getCity(id: string) {
    return this.http.get<any>(
      `${this.ep}/forecast?id=${id}&units;=metric&appid=daf97ddadef2b72b75f49b906ea9eac9`
    );
  }
  public async getNewCity(query: string) {
    return this.http.get<any>(
      `${this.ep}/weather?q=${query}&units;=metric&appid=daf97ddadef2b72b75f49b906ea9eac9`
    );
  }
}

const weatherDataService = new WeatherDataService();

export { weatherDataService };
