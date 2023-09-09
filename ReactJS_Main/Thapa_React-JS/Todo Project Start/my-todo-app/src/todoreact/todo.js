import React from "react";
import reactDOM from 'react-dom/client';

import './style.css';

 
const Todo = () => {
  return (
    <>
      <div className="main-div">
        <div className="child-div">
            <figure>
               <img src="./images/todo.svg" alt="todologo"/> 
               <figcaption>Add Your List Here</figcaption>

            </figure>
              <div className="addItems">
                  <input type="text"
                  placeholder="✍️ Add Item"
                  className="form-control"
                  />
              </div>

        </div>
      </div>
    </>
  )
}

export default Todo
