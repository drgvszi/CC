import React from "react";
import axios from "axios";
import TodosList from "./TodosList";
const AddTodoItem = () => {

    const handleSubmit = async (e) => {
        e.preventDefault();

        await axios.post("http://localhost:5000/todos", {
            description: e.target["description"].value
        });
        window.location.reload(true);
    }

    return (
        <div className="line">
            <form onSubmit={handleSubmit}>
                <input type="text" name="description" />
                <button type="submit"> Translate </button>
            </form>
            <TodosList />
        </div>
    );
};

export default AddTodoItem;