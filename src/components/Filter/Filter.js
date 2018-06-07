import React from 'react';
import './Filter.css';

const Filter = (props) => {
    const handleFilter = props.handleFilter;
    return (
        <section className="Filter">
            <input className="clean-input" onInput={handleFilter} type="search" placeholder="Filter..." />
        </section>
    );
}

export default Filter;
