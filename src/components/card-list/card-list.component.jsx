import React from 'react';
import './card-list.style.css';

import CardContainer from "../card/card.component";

const CardList = ({ monsters }) => (

    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <CardContainer monster={monster}></CardContainer>
            );
        })}
    </div>   
);

export default CardList; 