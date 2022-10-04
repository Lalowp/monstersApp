import React, { Component, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import logo from './logo.svg';
import CardList from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';
import './App.css';
import Home from './routes/home/home.component';
import MonsterDetail from './routes/monster-details/monster-details.component';


const App = () => {

  return (
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/monster/:id' element={<MonsterDetail/>}/>
    </Routes>
  );
};

/*
class App extends Component{
  constructor(){
    super();
    this.state = {
      monsters: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => this.setState(() => {
      return {monsters : users}
    }));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLocaleLowerCase();
    this.setState(() => {
      return {searchField};
    });
  }


  render(){

    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

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
  }
  
}
*/
export default App;
