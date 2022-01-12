import React from "react";

import './post-status-filter.css'



function PostStatusFilter (props){
    const btns = [
        {name : 'all', label: 'Все'},
        {name : 'like', label: 'Понравилось'}]

    const buttons = btns.map(({name, label}) => {
        const {filter, onFilterSelect} = props
        const active = filter === name
        const styles = active ? 'btn-info' : 'btn-outline-secondary'
        return (
            <button
                key={name}
                className={`btn ${styles}`}
                type='button'
                onClick={() => onFilterSelect(name)}
            >
                {label}</button>
        )
    })

    return(
        <div className='btn-group'>
            {buttons}
        </div>
    )

}

export default PostStatusFilter


