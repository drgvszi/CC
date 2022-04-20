import React, { useState, useEffect } from "react";
import axios from "axios";
import TodoItem from "./TodoItem";

const TodosList = () => {
    const [todosList, setTodosList] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/todos").then((res) => {
            setTodosList(res.data);
        })
    }, []);

    if(!todosList) return <p> Loading... </p>

    return (
        <div>
            <h4>History:</h4>
            {todosList.map((item, index) => { 
                /* i = 0...n, item[i] */
                return <TodoItem todoItem={item} key={index}/>
            })}
        </div>
    );
};

export default TodosList;