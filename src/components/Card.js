import React from 'react';
import '../styles/card.scss';

const Card = ({ logo, category, Description, link, Title }) => {
    return (
        <div className="card" onClick={() => window.open(link, "_blank")}>
            <img src={logo} alt={`${Title} logo`} className="card-logo" />
            <div className="card-info">
                <span className="card-category">{category}</span>
                <h3 className="card-description">{Description}</h3>
            </div>
        </div>
    );
};

export default Card;