import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHtml5, faCss3Alt, faSass, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import '../styles/categories.scss';

const categoriesList = {
    html: {icon: faHtml5 },
    css: {icon: faCss3Alt },
    sass: {icon: faSass },
    javascript: {icon: faJs },
    react: {icon: faReact },
};

const Categories = ({ selectedCategories }) => {
    return (
        <div className="categories">
            {selectedCategories.map(catKey => 
                categoriesList[catKey] ? (
                    <div key={catKey} className="category">
                        <FontAwesomeIcon icon={categoriesList[catKey].icon} />
                        <span>{categoriesList[catKey].name}</span>
                    </div>
                ) : null
            )}
        </div>
    );
};

export default Categories;
