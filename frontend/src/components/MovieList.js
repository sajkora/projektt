import React, {useEffect} from "react";
import {Link} from "react-router-dom";
import { Dropdown } from 'semantic-ui-react'

import MovieCard from "./MovieCard";


const MovieList = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const categories = [
        {
            key: 'id',
            text: 'id',
            value: 'id',
            content: 'Data dodania'
        },
        {
            key: 'title',
            text: 'title',
            value: 'title',
            content: 'Tytuł'
        },
        {
            key: 'genre',
            text: 'genre',
            value: 'genre',
            content: 'Gatunek'
        },
        {
            key: 'year',
            text: 'year',
            value: 'year',
            content: 'Rok'
        },
    ]

    const showMovieList = props.movies.map((movie) => {
        return(
            <MovieCard key={movie.id} movie={movie}></MovieCard>
        );
    });

    return (
        <div className="ui main text container">
            <h2 className="ui header">Lista filmów</h2>

            <div className="ui divider"></div>
            <div className="ui hidden divider"></div>

            <div className="ui stackable grid">

                <div className="four wide column">
                    <Link to="/add">
                        <div className="ui animated button violet medium right fluid" >
                            <div className="visible content">Dodaj film</div>
                            <div className="hidden content"><i className="plus icon fix-margin"></i></div>
                        </div>
                    </Link>
                </div>

                <div className="four wide column">
                    <Dropdown
                        text='Sortuj wg.'
                        icon='sort'
                        floating
                        scrolling
                        labeled
                        onChange = {props.sortHandler}
                        button
                        options = {categories}
                        className="icon fluid medium"
                        header="Wybierz kategorię:" >
                    </Dropdown>
                </div>

                <div className="eight wide column">
                    <div className="ui medium form">
                        <div className="ui search">
                            <div className="ui icon input">
                                <input className="prompt" type="text" placeholder="Wyszukaj film..." value={props.searchTerm} onChange={(term) =>props.searchHandler(term)}/>
                                <i className="search icon"></i>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div className="ui hidden divider"></div>
            <div className="ui divider"></div>
            <div className="ui hidden divider"></div>

            <div className="ui stackable grid three column">
                { showMovieList.length > 0 ? showMovieList : 
                    <div className="column sixteen wide">
                        <div className="ui icon message negative">
                            <i className="meh outline icon"></i>
                            <div className="content">
                                <div className="header">Nie mam żadnych filmów.</div>
                                <p>Coś poszło nie tak... Może spróbuj zmienić kryteria wyszukiwania?</p>
                            </div>
                        </div> 
                    </div>
                }
            </div>
        </div>
    );
    
};


export default MovieList;