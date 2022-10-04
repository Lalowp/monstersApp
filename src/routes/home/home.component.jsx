import React, { useEffect } from 'react';
import { useState } from 'react';

import CardList from '../../components/card-list/card-list.component';
import SearchBox from '../../components/search-box/search-box.component';
import '../../App.css';


const Home = () => {
  const [searchField, setSearchField] = useState(''); 
  const [monsters, setMonters] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => setMonters(users));
  }, []);

  const onSearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  const filteredMonsters = monsters.filter((el) => {
    return el.name.toLocaleLowerCase().includes(searchField);
  }); 

  return (
    <div className="App">
    <h1 className='app-title'>MonstersRolodex</h1>
    <SearchBox onChangeHandler={onSearchChange} placeholder={'Enter name'} className={'monsters-search-box'}></SearchBox>
    <CardList monsters={filteredMonsters}></CardList>
  </div>
  );
};

export default Home; 