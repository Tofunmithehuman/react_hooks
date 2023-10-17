import React from 'react';

const Filter = ({ handleFilterChange, titleFilter, ratingFilter }) => {
    return (
        <div className="filter">
            <input
                type="text"
                placeholder="Search..."
                value={titleFilter}
                onChange={(e) => handleFilterChange(e.target.value, 'title')}
            />
            <input className='ms-1'
                type="number"
                placeholder="Search rating..."
                value={ratingFilter}
                onChange={(e) => handleFilterChange(e.target.value, 'rating')}
            />
        </div>
    );
};

export default Filter;