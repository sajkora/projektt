import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import Form from "./Form";


const EditMovie = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    const {id, title, director, genre, year, description, image_url} = props.location.state.movie;

    const state = {id, title, director, genre, year, description, image_url}

    const submitHandler = (values) => {
        props.updateHandler(values);
        props.history.push("/")
    }

    const removeHandler = () => {
        props.removeHandler(id);
        props.history.push("/")
    }

    const checkIfExists = (name) => {
        return false;
    }

    return (
        <div className="ui main text container">
            <div className="ui stackable grid two column">
                <div className="column thirteen wide head">
                    <h2 className="ui header"><b className="backtext">Edytuj |</b> {title}</h2>
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
                <Form state={state} submitHandler={submitHandler} removeHandler={removeHandler} addOrEdit={"edit"} checkIfExists={checkIfExists}/>
            </div>
        </div>
    );

};


export default EditMovie;