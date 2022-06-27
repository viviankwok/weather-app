const newYorkData = {
  // 20220627191110
  // http://api.weatherstack.com/current?access_key=abf7f3d36b5ca196a0d8346c7b19b02c&query=New%20York

  request: {
    type: "City",
    query: "New York, United States of America",
    language: "en",
    unit: "m",
  },
  location: {
    name: "New York",
    country: "United States of America",
    region: "New York",
    lat: "40.714",
    lon: "-74.006",
    timezone_id: "America/New_York",
    localtime: "2022-06-27 07:08",
    localtime_epoch: 1656313680,
    utc_offset: "-4.0",
  },
  current: {
    observation_time: "11:08 AM",
    temperature: 23,
    weather_code: 122,
    weather_icons: [
      "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0004_black_low_cloud.png",
    ],
    weather_descriptions: ["Overcast"],
    wind_speed: 22,
    wind_degree: 220,
    wind_dir: "SW",
    pressure: 1014,
    precip: 0,
    humidity: 71,
    cloudcover: 100,
    feelslike: 25,
    uv_index: 6,
    visibility: 16,
    is_day: "yes",
  },
};
