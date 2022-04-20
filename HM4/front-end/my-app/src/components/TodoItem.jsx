import React from "react";

const TodoItem = (props) => {
    return (
        <div>
            <p> Text: {props.todoItem.description} </p>
            <p> Text-translated: {props.todoItem.descriptionTranslated} </p>
            <br></br>
        </div>
    );
};

export default TodoItem;