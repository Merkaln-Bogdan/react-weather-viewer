import sunny from "assets/bg-sunny.png";
import cloudiness from "assets/bg-cloudiness.png";
import cloud from "assets/bg-clouds.png";

const backgroundChooser = (weather: any) => {
  switch (true) {
    case weather < 30:
      return sunny;
    case weather > 30 && weather < 71:
      return cloudiness;
    case weather > 71:
      return cloud;
    default:
      return "#cfcfcf";
  }
};

export { backgroundChooser };
