import React, {useState, useEffect} from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import api from "./api/movies"

import "semantic-ui-css/semantic.min.css";
import "./App.scss"

import Header from "./components/Header";
import AddMovie from "./components/AddMovie";
import EditMovie from "./components/EditMovie";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";


function App() {

    
    const [movies, setMovies] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const [searchTerm, setSearch] = useState("");

    useEffect(()=>{
        const getAllMovies = async () => {
            const allMovies = await retreiveMovies();
            if(allMovies) setMovies(allMovies);
        };
    
        getAllMovies();
      }, []);


    const retreiveMovies = async() => {
        const response = await api.get("/movies")
        return response.data;
    };

    const addHandler = async (movie) => {
        const request = {
            ...movie
        }

        const response = await api.post("/movie", request);
    
        setMovies([...movies, response.data]);
    };

    const updateHandler = async (movie) => {
        const response = await api.put(`/movie/${movie.id}`, movie);
        const {id} = response.data;
        setMovies (
            movies.map((movie) => {
            return movie.id === id ? {...response.data} : movie; 
            })
        );
    };

    const removeHandler = async (id) => {

        await api.delete(`/movie/${id}`);

        const newMovies = movies.filter((movie) => {
            return movie.id !== id;
        });

        setMovies(newMovies);
    };

    const sortHandler = (element, value) => {
        const sortArray = type => {
            const types = {
                id: "id",
                title: "title",
                genre: "genre",
                year: "year",
            };
            const sortProperty = types[type];
            const sorted = [...movies].sort((a, b) => {
                if (sortProperty === "id") {
                    return a.id.localeCompare(b.id);
                } else if (sortProperty === "title") {
                    return a.title.localeCompare(b.title);
                } else if (sortProperty === "genre") {
                    return a.genre.localeCompare(b.genre);
                } else {
                    return b[sortProperty] - a[sortProperty];
                }
            });
            setMovies(sorted);
        };
        sortArray(value.value);
    };

    const searchHandler = (term) => {
        setSearch(term.target.value);
        if(searchTerm !== ""){
            const newMovieList = movies.filter((movie) => {
            return Object.values(movie).join(" ").toLowerCase().includes(searchTerm.toLowerCase());
            });
        setSearchResult(newMovieList);
        } else {
        setSearchResult(movies)
        }
    };

    return (
        <div>
            <Router>
                <Header />
                <Switch>
                    <Route 
                        path="/" 
                        exact 
                        render={(props) => (
                            <div className="ui main">
                                <MovieList 
                                    {...props} 
                                    movies={searchTerm.length < 1 ? movies : searchResult} 
                                    sortHandler={sortHandler} 
                                    searchTerm={searchTerm} 
                                    searchHandler={searchHandler}
                                />
                            </div>
                            )} 
                    />
                    <Route path="/add" render={(props) => (<AddMovie {...props} addHandler={addHandler} movies={movies}/>)} />
                    <Route path="/edit" render={(props) => (<EditMovie {...props} updateHandler={updateHandler} removeHandler={removeHandler} movies={movies}/>)} />
                    <Route path="/movie/:id" component={MovieDetail} />
                </Switch>
            </Router>
        </div>
    );

}


    export default App;