import axios from 'axios'
const API_KEY = '976438d9db1da941ab7123d1522f735c'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
  const url = `${ROOT_URL}&q=${city},in`
  const request = axios.get(url)
  console.log('Request recived ', request);
  return {
    type: FETCH_WEATHER,
    payload: request
  }
}
