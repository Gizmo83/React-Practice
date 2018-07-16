import React from 'react';
import './Card.css';

const Card = props => {
    let fav = (props.favorite === undefined) ? null : props.favorite.split(", ")
    
    return (
    <div className="people-container">
    {props.people.map(result => {
        //console.log(result)
        let email = result.email
        let dob = result.dob.date.split("T")

        if (fav != null)
        fav.forEach(function(favorites) {
            if (result.email === favorites) {
                return result.fav = true;
            } 
        })
        return(
            <div className="card" key={result.email}>
                <img className="card-img-top" src={result.picture.large} alt=""/>
                <div className="card-body">
                    <button id="heartbtn" onClick={() => props.handleFavorite(email)}>{result.fav ? <i className="fas fa-heart"></i> : <i className="far fa-heart"></i> }</button>
                    <h5 className="card-title">{result.name.first.charAt(0).toUpperCase() + result.name.first.slice(1)} {result.name.last.charAt(0).toUpperCase() + result.name.last.slice(1)}</h5>
                    <p className="card-text">Gender: {result.gender}</p>
                    <p className="card-text">DOB: {dob[0]}</p>
                    <p className="card-text">Location: {result.location.city.charAt(0).toUpperCase() + result.location.city.slice(1)}, {result.location.state.charAt(0).toUpperCase() + result.location.state.slice(1)}</p>
                </div>
            </div>
        )
    })}    
    </div>
    )
}

export default Card;