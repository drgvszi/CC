import React from "react";

const TodoItem = (props) => {
    return (
        <div>
            <p> <b>Text:</b> {props.todoItem.description} </p>
            <p> <b>Text-translated:</b> {props.todoItem.descriptionTranslated} </p>
            <br></br>
        </div>
    );
};

export default TodoItem;