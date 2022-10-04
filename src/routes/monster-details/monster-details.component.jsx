import { useParams } from 'react-router-dom';
import React, { useEffect } from 'react';
import { useState } from 'react';

const MonsterDetail = () => {
    const [monster, setMonster] = useState({});
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((response) => response.json())
        .then((monster) => setMonster(monster));
      }, []);

    
    return( 
        <div>      
            <h2>Monster Page:  {id}</h2>
            <span>Monster name: {monster.name}</span>
            <br/>
            <span>Monster email: {monster.email}</span>
            <span></span>
        </div> 
    );
};

export default MonsterDetail;