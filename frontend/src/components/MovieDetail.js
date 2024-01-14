import React, {useEffect} from "react";
import {Link} from "react-router-dom";


const MovieDetail = (props) => {

    useEffect(() => {
    window.scrollTo(0, 0)
    }, [])

    const {title, director, genre, year, description, image_url} = props.location.state.movie;

    return (
        <div className="ui main text container">

            <div className="ui stackable grid two column">
                <div className="column thirteen wide head">
                    <h2 className="ui header"><b className="backtext">Szczegóły |</b> {title}</h2>
                </div>
                <div className="column three wide right floated head">
                    <Link to="/">
                        <div className="ui animated button fluid" >
                            <div className="visible content">Powrót</div>
                            <div className="hidden content"><i className="left arrow icon fix-margin"></i></div>
                        </div>
                    </Link>
                </div>
            </div>

            <div className="ui hidden divider"></div>

            <div className="ui segment">

                <div className="ui stackable mobile reversed two column grid">

                    <div className="column">
                        <div className="ui fluid vertical steps">
                            <div className="active step">
                                <i className="small user outline icon"></i>
                                <div className="content">
                                    <div className="title">Reżyser</div>
                                    <div className="description">{director}</div>
                                </div>
                            </div>
                            <div className="active step">
                                <i className="folder open outline icon"></i>
                                <div className="content">
                                    <div className="title">Gatunek</div>
                                    <div className="description">{genre}</div>
                                </div>
                            </div>
                            <div className="active step">
                                <i className="calendar alternate outline icon"></i>
                                <div className="content">
                                    <div className="title">Rok</div>
                                    <div className="description">{year}</div>
                                </div>
                            </div>
                            <div className="active step">
                                <i className="pencil alternate icon"></i>
                                <div className="content">
                                    <div className="title">Opis</div>
                                    <div className="description">{description}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <img alt="obrazek" className="ui fluid image" src={image_url} />
                    </div>

                </div>

            </div>
        </div>
    );
    
};

export default MovieDetail;