import React from 'react';
// import { useDispatch } from "react-redux";

export default function Create(){
    // let dispacth = useDispatch();

    let [input, setInput] = React.useState({
        name: "",
        description: "",
        age: "",
        city: "",
    });

    let handleChange = (e) => {
        e.preventDefault();
        console.log(e);
        setInput((prev) => ({...prev, [e.target.name]:e.target.value}))
    };

    let handleSubmit = (e) => {
        e.preventDefault();
        // dispacth(createUser(input)); // esto devuelve {type: CREATE_USER, payload: input}
        setInput({name: '', lastName:'', age:'', city: ''})
    };

    return (
        <>
            <h1>Create Videogame</h1>
            <br />
            <form onSubmit={e => handleSubmit(e)}>
            <div>
                <label>Name</label>
                <input type={"text"} placeholder='Name' name={'name'} value={input.name}
          onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label>Description</label>
                <input type={"text"} placeholder='Description' name={'description'} value={input.description}
          onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label>Release date</label>
                <input type={"text"} placeholder='Write a description of the game' name={"age"} value={input.age}
          onChange={(e) => handleChange(e)}/>
            </div>
            <div>
                <label>Rating</label>
                <input type={"text"} placeholder='Rating ' name={"city"} value={input.city}
          onChange={(e) => handleChange(e)}/>
            </div>
            <br/>
                <input type={'submit'} value={'CREATE'}/>
            </form>
        </>
    )
};