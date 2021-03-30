/**
 * Weather App
 * TODO: Complete getWeatherData() to return json response Promise
 * TODO: Complete searchCity() to get user input and get data using getWeatherData()
 * TODO: Complete showWeatherData() to set the data in the the html file from response
 */

// API_KEY for maps api
let API_KEY = "a8e71c9932b20c4ceb0aed183e6a83bb";

/**
 * Retrieve weather data from openweathermap
 * HINT: Use fetch()
 * HINT: URL should look like this: 
 * https://api.openweathermap.org/data/2.5/weather?q=detroit&appid=a8e71c9932b20c4ceb0aed183e6a83bb&units=celcius
 */
getWeatherData = (city) => {
  const URL = "https://api.openweathermap.org/data/2.5/weather";
  let Full_URL = `${URL}?q=${city}&appid=${API_KEY}&units=metric`
  const weaatherPromise = fetch(Full_URL);
  return weaatherPromise.then((response)=>{
      return response.json()
  })
}


/**
 * Retrieve city input and get the weather data
 * HINT: Use the promise returned from getWeatherData()
 */
searchCity = () => {
  let city = document.getElementById('city-input').value;
  getWeatherData(city).then((res)=>{
      showWeatherData(res);
  }).catch((error)=>{
    console.log(error);
  })
}

/**
 * Show the weather data in HTML
 * HINT: make sure to console log the weatherData to see how the data looks like
 */
showWeatherData = (weatherData) => {
    document.getElementById('temp').innerHTML = weatherData.main.temp
    document.getElementById('min-temp').innerHTML = weatherData.main.temp_min
    document.getElementById('max-temp').innerHTML = weatherData.main.temp_max
    document.getElementById('weather-type').innerHTML = weatherData.weather[0].description
    document.getElementById('city-name').innerHTML = weatherData.name
  }

