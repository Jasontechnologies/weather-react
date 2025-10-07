import React, { useState } from 'react'
import WeatherSearch from './components/WeatherSearch'
import WeatherInfo from './components/WeatherInfo'
import './styles.css'

export interface WeatherData {
  location: string
  temperature: number
  description: string
}

const App: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')

  const fetchWeather = async (city: string) => {
    try {
      setLoading(true)
      setError('')
      const apiKey = import.meta.env.VITE_API_KEY;
      const res = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
      if (!res.ok) throw new Error('City not found')
      const data = await res.json()
      setWeather({
        location: data.name,
        temperature: data.main.temp,
        description: data.weather[0].description,
      })
    } catch (err) {
      setError('Could not fetch weather data.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container">
      <h1>🌤 Weather App</h1>
      <WeatherSearch onSearch={fetchWeather} />
      {loading && <p>Loading...</p>}
      {error && <p className="error">{error}</p>}
      {weather && <WeatherInfo weather={weather} />}
    </div>
  )
}

export default App
