import { ImageBackgroundComponent } from "react-native";

export const WeatherType = {
  Thunderstorm: {
    icom: "zap",
    message: "it could get noisy",
    backgroundColor: "#000000",
  },
  Drizzle: {
    icon: "cloud-rain",
    message: "it might rain a little",
    backgroundColor: "#36454f",
  },
  Rain: {
    icon: "umbrella",
    message: "you will need an Umbrella",
    backgroundColor: "#0000ff",
  },
  Snow: {
    icon: "cloud-snow",
    message: "lets build a snowman",
    backgroundColor: "#7f6065",
  },
  Clear: {
    icon: "sun",
    message: "it is a perfect t-shirt weather",
    backgroundColor: "#e47200",
  },
  Clouds: {
    icon: "cloud",
    message: "you could live in the clouds",
    backgroundColor: "#363636",
  },
  Haze: {
    icon: "wind",
    message: "it is a bit damp",
    backgroundColor: "#58586e",
  },
  Mist: {
    icon: "align-justify",
    message: "it might be hard to see",
    backgroundColor: "#3e3e37",
  },
};
