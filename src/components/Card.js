import React from 'react';
import Categories from './Categories';
import '../styles/card.scss';


const Card = ({ logo, category, Description, link, Title }) => {
    return (
        <article className="card shadow" onClick={() => window.open(link, "_blank")}>
            <img src={logo} alt={`${Title} logo`} className="card-logo" />
            <div className="card-info">
                <Categories selectedCategories={category} />
                <h3 className="card-description">{Description}</h3>
            </div>
        </article>
    );
};

export default Card;
