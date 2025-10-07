import React, { useState } from "react";

interface WeatherSearchProps {
  onSearch: (city: string) => void;
}

const WeatherSearch: React.FC<WeatherSearchProps> = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (city.trim()) {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="search-form">
      <input
        type="text"
        placeholder="Enter city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button type="submit">Get Weather</button>
    </form>
  );
};

export default WeatherSearch;
