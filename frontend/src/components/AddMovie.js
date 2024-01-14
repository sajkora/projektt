import React, {useEffect} from "react";
import {Link} from "react-router-dom";

import Form from "./Form";


const AddMovie = (props) => {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const state = {title:"", director:"", genre:"", year:"", description:"", image_url:""};

    const submitHandler = (values) => {
        props.addHandler(values);
        props.history.push("/")
    } 
    
    const checkIfExists = (name) => {
        const found = props.movies.some(el => el.title === name);
        if(found === true) return true;
        else return false;
    }

    return (
        <div className="ui main text container">
            <div className="ui stackable grid two column">
                <div className="column thirteen wide head">
                    <h2 className="ui header">Dodaj film</h2>
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
                <Form state={state} submitHandler={submitHandler} addOrEdit={"add"} checkIfExists={checkIfExists}/>
            </div>
        </div>
    );

};


export default AddMovie;