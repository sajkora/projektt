import React from "react";
import {Link} from "react-router-dom";


const MovieCard = (props) => {

    const {id, title, description, genre, image_url} = props.movie;

    
    return (
        <div className="column">
            <div className="ui fluid card">
                <div className="image"><img className="cover" alt="okladka" src={image_url} /></div>
                <div className="content">
                    <div className="header">{title}</div>
                    <div className="description"><b className="backtext">{genre} | </b>{description}</div>
                </div>
                <div className="bottom-buttons">
                    <Link className="bottom-button" to={{pathname: `/edit`, state: {movie: props.movie}}}>
                         <div className="ui bottom attached fade animated button fix-or-left" >
                             <div className="hidden content">Edytuj</div>
                             <div className="visible content"><i className="edit icon"></i></div>
                         </div>
                    </Link>
                    <Link className="bottom-button" to={{pathname: `/movie/${id}`, state: {movie: props.movie}}}>
                         <div className="ui bottom attached fade animated button fix-or-right" >
                             <div className="hidden content">Więcej</div>
                             <div className="visible content"><i className="search icon"></i></div>
                         </div>
                    </Link>
                </div>
            </div>
        </div>
    );
    
};


export default MovieCard;