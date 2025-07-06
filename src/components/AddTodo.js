import React, { useState } from "react";




function AddTodo(props) {
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const submit = (e) => {
            e.preventDefault();
            if(!title || !desc){
                alert("cant submit with blank title and description")
            }else{
                props.addTodo(title,desc);
                setTitle("");
                setDesc("");
            }
    }
    return (
        <div className="container my-3">
            <h3>Add new list</h3>
            <form onSubmit={submit}>
                <div >
                    <label htmlFor="title" className="form-label">
                        ToDo Title :
                    </label>
                    <input
                        type="text"
                        id="title"
                        value={title}
                        onChange={(e)=>{setTitle(e.target.value)}}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="desc" className="form-label">
                        ToDo Description :
                    </label>
                    <input
                        type="text"
                        id="desc"
                        value={desc}
                        onChange={(e)=>{setDesc(e.target.value)}}

                    />
                </div>
                <button type="submit" className="btn-sm btn-success">
                    Add ToDO
                </button>
            </form>
        </div>
    );
}

export default AddTodo;
