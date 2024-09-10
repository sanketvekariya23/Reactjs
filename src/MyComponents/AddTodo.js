import React, { useState } from 'react'

const AddTodo = (props) => {

    const[title , setTitle] = useState("");
    const[desc , setDesc] = useState("");

    const submit = (e)=>{
        e.preventDefault();     // not reaload page
        if(!title || !desc){
            alert("please enter title or description.");
        }
        else{
            props.addTodo(title,desc);
        }
    }
    return (
        <div className='container mt-3'>
            <h3 className='text-center'>Add Todo</h3>
            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="Title"> Todo Title</label>
                    <input type="text" value={title} onChange={(e)=>{setTitle(e.target.value)}} className="form-control my-2" id="Title" placeholder="Enter title" />
                </div>
                <div className="form-group">
                    <label htmlFor="desc">Description</label>
                    <input type="text" value={desc} onChange={(e)=>{setDesc(e.target.value)}} className="form-control my-2 " id="desc" placeholder="Description"/>
                </div>
                <button type="submit" className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default AddTodo
