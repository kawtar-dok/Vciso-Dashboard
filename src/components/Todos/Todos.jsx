import React, {useEffect, useState} from 'react'
import './Todos.css'

const Todos = (props) => {
    // eslint-disable-next-line react/prop-types
    const { setState } = props

    //we did used useEffect 
    //and we did give it a called back function 
    //and we gonna give it an umpty dependency way 
    //so we just want to run this function when the component is being loaded up 
    //so the first time in months we wanna run this function
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then((res) => res.json())
        //.then(data => console.log(data))
        .then((data) => {
           const fiveFirstTodos = data.slice(0,5);
           setState((state) => ({ ...state, todos: fiveFirstTodos}));
        });
    }, []);

    // eslint-disable-next-line react/prop-types
 console.log(props.todos);

const renderTodos = () => {
 return  props.todos.map((todo) => {
       return (
       <li className="todos-widget-list-item" key={todo.id}>
            {todo.title}
        </li>
       );
    });
};



  return
   (
    <div className="todos-widget">
     {/*} <ul className="todos-widget-list">
        {this.renderTodos()}
      </ul>*/}
    </div>
  );
};

export default Todos
