const southKoreaData = {
  request: {
    type: "City",
    query: "Seoul, South Korea",
    language: "en",
    unit: "m",
  },
  location: {
    name: "Seoul",
    country: "South Korea",
    region: "",
    lat: "37.566",
    lon: "127.000",
    timezone_id: "Asia/Seoul",
    localtime: "2022-06-27 20:21",
    localtime_epoch: 1656361260,
    utc_offset: "9.0",
  },
  current: {
    observation_time: "11:21 AM",
    temperature: 28,
    weather_code: 116,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
    ],
    weather_descriptions: ["Partly cloudy"],
    wind_speed: 28,
    wind_degree: 210,
    wind_dir: "SSW",
    pressure: 1004,
    precip: 1.1,
    humidity: 74,
    cloudcover: 75,
    feelslike: 34,
    uv_index: 5,
    visibility: 10,
    is_day: "no",
  },
};

export default southKoreaData;
