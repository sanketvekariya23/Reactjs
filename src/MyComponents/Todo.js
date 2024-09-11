import React from 'react';
import { TodoItem } from './TodoItem';

export const Todo = (props) => {
  return (
    <div className="container">
    
      <h3 className="text-center">Todos-List</h3>

      {props.todos.length ===0? "No todos are avalible.." :   
      
        // map functions  like loop retreives todo from an array 

          props.todos.map((todo) => {
             return(
              <>
             <TodoItem todo={todo} key={todo.sno} onDelete = {props.onDelete}/><hr/>
             </> )
           })
      }
    </div>
  );
};
