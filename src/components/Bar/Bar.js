import React from 'react';
import './Bar.css';

const Bar = props => {


    return (
    <div className="sort-bar">
        <button className="reloadbtn" onClick={() => props.reload()}>Reload</button>
        {props.favorites !== "" ? <button className="reloadbtn" onClick={() => props.modal()}>Favorites</button> : ""}
        <div className="dropdown">
            <button className="dropbtn">Filter</button>
            <div className="dropdown-content">
                <a onClick={() => props.filter()}>All</a>           
                <a onClick={() => props.filter("male")}>Male</a>
                <a onClick={() => props.filter("female")}>Female</a>
                <a onClick={() => props.filter("50Under")}>Age Under 50</a>
                <a onClick={() => props.filter("50Over")}>Age Over 50</a>
            </div>
        </div>  
        <div className="dropdown">
            <button className="dropbtn">Sort</button>
            <div className="dropdown-content">
                <a onClick={() => props.sort("nameAsc")}>Name Asc</a>
                <a onClick={() => props.sort("nameDesc")}>Name Desc</a>
                <a onClick={() => props.sort("locationAsc")}>Location Asc</a>
                <a onClick={() => props.sort("locationDesc")}>Location Desc</a>
            </div>
        </div>        
    </div>
    )
}

export default Bar;