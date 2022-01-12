import React, {Component, useState} from "react";
import './search-panel.css'

 function SearchPanel (props){

    const onUpdateSearch =(e) => {
        const term = e.target.value
        props.onUpdateSearch(term)
    }

    return (<input
            type="text"
            className='form-control search-input'
            placeholder='Search'
            onChange={onUpdateSearch}
        />
    )

}
export default SearchPanel;

