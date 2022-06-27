const singaporeData =
  // 20220627191506
  // http://api.weatherstack.com/current?access_key=abf7f3d36b5ca196a0d8346c7b19b02c&query=Singapore

  {
    request: {
      type: "City",
      query: "Singapore, Singapore",
      language: "en",
      unit: "m",
    },
    location: {
      name: "Singapore",
      country: "Singapore",
      region: "",
      lat: "1.293",
      lon: "103.856",
      timezone_id: "Asia/Singapore",
      localtime: "2022-06-27 19:15",
      localtime_epoch: 1656357300,
      utc_offset: "8.0",
    },
    current: {
      observation_time: "11:15 AM",
      temperature: 30,
      weather_code: 116,
      weather_icons: [
        "https://assets.weatherstack.com/images/wsymbols01_png_64/wsymbol_0002_sunny_intervals.png",
      ],
      weather_descriptions: ["Partly cloudy"],
      wind_speed: 9,
      wind_degree: 150,
      wind_dir: "SSE",
      pressure: 1006,
      precip: 0,
      humidity: 70,
      cloudcover: 75,
      feelslike: 35,
      uv_index: 7,
      visibility: 10,
      is_day: "yes",
    },
  };
