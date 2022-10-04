import React from 'react';
import './card.style.css'; 

const CardContainer = ({ monster }) => {

    const { name, id, email, website } = monster;
    return(
    <a href={`/monster/${id}`}>
    <div className={'card-container'} key={id}>
        <img alt={`monster ${name}`} src={`https://robohash.org/${id}?set=set2&size=180x180`} />
        <h2>{name}</h2>
        <p>{email}</p>
        <a href={website} target="blank_">{website}</a>
    </div>
    </a>
    );
};

export default CardContainer; 