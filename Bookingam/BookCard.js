import React from 'react';
import "./pages/pagesCSS/card.css"

const BookCard = (props) => {
    return(
        <div class="row">
          <div class="col-sm-2">
            <div class="card">
                <div class="card_details_img">
                <img src={props.image} alt=""/>
                </div>
                <h2>{props.title}</h2>
                <h3>{props.author}</h3>
            </div>
          </div>
        </div>
    )
}

export default BookCard;