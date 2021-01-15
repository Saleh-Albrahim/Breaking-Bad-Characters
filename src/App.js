import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import './App.css';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch(`https://www.breakingbadapi.com/api/characters`)
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    }
    fetchItems();
  }, [])

  return (
    <div className="container">
      <Header />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
