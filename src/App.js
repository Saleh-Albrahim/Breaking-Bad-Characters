import React, { useState, useEffect } from 'react';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search';
import './App.css';

const App = () => {

  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      setIsLoading(true);
      const response = await fetch(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      const data = await response.json();
      setItems(data);
      setIsLoading(false);
    }
    fetchItems();
  }, [query])

  return (
    <div className="container">
      <Header />
      <Search getQuery={(q) => { setQuery(q) }} />
      <CharacterGrid isLoading={isLoading} items={items} />
    </div>
  );
}

export default App;
