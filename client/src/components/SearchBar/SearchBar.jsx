import React from "react";
// import s from './SearchBar.module.css';
import { useState } from "react";
import { useDispatch } from "react-redux";
import { getName } from "../../redux/actions/index"

export default function SearchBar(){
    const dispatch = useDispatch();
    const [name, setName] = useState('');

    function handleChange(e){
        e.preventDefault();
        setName(e.target.value);
    };

    function handleSubmit(e){
        e.preventDefault();
        if(name.length > 1) { 
            dispatch(getName(name));
            setName('');
        } else {
            alert('You have to enter a name');
        }; 
    };

    return (
        <div >
           <input type="text" placeholder="Search name ..." id="name" autoComplete="off"
                        value={name} onChange={(e) => handleChange(e)}/> 
           <button type="submit" onClick={(e) => handleSubmit(e)}>Search</button>
        </div>
    );
};