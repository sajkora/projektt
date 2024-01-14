import React from "react";
import {Link} from "react-router-dom";
import {useFormik} from 'formik';


const Form = (props) => {

    const validate = (values) => {
        let errors = {  }

        if(!values.title) {
            errors.title = "Tytuł nie może być pusty!"
        } else if (props.checkIfExists(values.title) === true){
            errors.title = "Podany tytuł już istnieje!"
        }

        if(!values.director) {
            errors.director = "Reżyser nie może być pusty!"
        } 

        if(!values.genre) {
            errors.genre = "Gatunek nie może być pusty!"
        }

        if(!values.year) {
            errors.year = "Rok nie może być pusty!"
        } else if(values.year > todayDate.getFullYear()){
            errors.year = "Rok nie może być większy od obecnego!"
        } else if(values.year < 1895){
            errors.year = "Rok nie może być mniejszy niż 1895!"
        }

        if(!values.description){
            errors.description = "Opis nie może być pusty!"
        }
        
        if(!values.image_url){
            errors.image_url = "Link do obrazka nie może być pusty!"
        } else if(!/^(http|https):\/\/[^ "]+$/i.test(values.image_url)) {
            errors.image_url = "Wprowadź poprawny link!"
        }
        
        
        return errors
    }

    const formik = useFormik ({
        initialValues: props.state,
        onSubmit: (values) => {props.submitHandler(values)},
        validate: validate
    });

    const todayDate = new Date();
    
    const errorHandler = () => {
        if (Object.keys(formik.touched).length === 6) {
                if (Object.keys(formik.errors).length === 0){
                    return ("ui form");
                }
                if (Object.keys(formik.errors).length !== 0){
                    return ("ui form error");
                }
            } else {
                return ("ui form")  
        } 
    }

    const addOrEdit = (value) => {
        if(value === "add") {
            return (
                <div>
                    <div className="ui buttons">
                        <Link to="/">
                            <div className="ui animated large button fix-or-left" >
                               <div className="visible content">Anuluj</div>
                               <div className="hidden content"><i className="left arrow icon fix-margin"></i></div>
                            </div>
                        </Link>
                        <div className="or" data-text="lub"></div>
                        <button className="ui vertical animated button large positive fix-or-right">
                                <div className="visible content">Dodaj</div>
                                <div className="hidden content"><i className="add icon"></i></div>
                        </button>
                    </div>
                </div>
            )
        }
        if(value==="edit") {
            return (
                <div>
                    <div className="ui buttons">
                        <Link to="/">
                            <div className="ui animated large button fix-or-left" >
                               <div className="visible content">Anuluj</div>
                               <div className="hidden content"><i className="left arrow icon fix-margin"></i></div>
                            </div>
                        </Link>
                        <div className="or" data-text="lub"></div>
                        <div className="ui vertical animated button large red fix-or-middle" onClick={props.removeHandler} >
                                <div className="visible content">Usuń</div>
                                <div className="hidden content"><i className="exclamation triangle icon"></i></div>
                        </div>
                        <div className="or" data-text="lub"></div>
                        <button className="ui vertical animated button large violet fix-or-right">
                                <div className="visible content">Edytuj</div>
                                <div className="hidden content"><i className="edit icon"></i></div>
                        </button>
                    </div>
                </div>
            )
        }
    }

    return (
        <form className={errorHandler()} onSubmit={formik.handleSubmit}>
            <div className={formik.touched.title && formik.errors.title ? "field error" : "field"}>
                <label htmlFor="title" >Tytuł</label>
                <input type="text" name="title" id="title" placeholder="Tytuł" onChange={formik.handleChange} value={formik.values.title} onBlur={formik.handleBlur}></input>
            </div>
            
            <div className={formik.touched.director && formik.errors.director ? "field error" : "field"}>
                <label htmlFor="director" >Reżyser</label>
                <input type="text" name="director" id="director" placeholder="Reżyser" onChange={formik.handleChange} value={formik.values.director} onBlur={formik.handleBlur}></input>
            </div>
            
            <div className={formik.touched.genre && formik.errors.genre ? "field error" : "field"}>
                <label htmlFor="genre" >Gatunek</label>
                <input type="text" maxLength="50" name="genre" id="genre" placeholder="Gatunek" onChange={formik.handleChange} value={formik.values.genre} onBlur={formik.handleBlur}></input>
                </div>
            
            <div className={formik.touched.year && formik.errors.year ? "field error" : "field"}>
                <label htmlFor="year" >Rok</label>
                <input type="number" min="1895" max={todayDate.getFullYear()} maxLength="4" name="year" id="year" placeholder="Rok" onChange={formik.handleChange} value={formik.values.year} onBlur={formik.handleBlur}></input>
            </div>
            
            <div className={formik.touched.description && formik.errors.description ? "field error" : "field"}>
                <label htmlFor="description" >Opis</label>
                <textarea rows="4" name="description" id="description" placeholder="Opis" onChange={formik.handleChange} value={formik.values.description} onBlur={formik.handleBlur}></textarea>
            </div>
            
            <div className={formik.touched.image_url && formik.errors.image_url ? "field error" : "field"}>
                <label htmlFor="image_url" >Link do obrazka</label>
                <input type="text" name="image_url" id="image_url" placeholder="Link do obrazka" onChange={formik.handleChange} value={formik.values.image_url} onBlur={formik.handleBlur}></input>
            </div>
            
            <div className="ui error message">
                <div className="header">Twój formularz zawiera błędy</div>
                    <br></br>
                    <div className="description">   
                        { Object.values(formik.errors).map(function(d, idx){
                            return (<p key={idx}>{d}</p>)
                        }) }
                    </div>
                </div>
            
            <div className="ui hidden divider"></div>
            
            {addOrEdit(props.addOrEdit)}
                
        </form>
    );

};

export default Form;