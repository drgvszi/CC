import React , { Component } from 'react';
import SearchField from '../components/SearchField';
import request from 'superagent';
import BookList from '../components/bookGenerate/BookList';
import { NavLink } from "react-router-dom";
import "./pagesCSS/page.css"


class Home extends Component {
constructor(props){
    super(props);
        this.state = {
            books: [],
            searchField: ''
        }
    
}

searchBook = (e) => {
    e.preventDefault();
    request 
        .get("https://www.googleapis.com/books/v1/volumes")
        .query({ q: this.state.searchField })
        .then((data) => {
            const cleanData = this.cleanData(data)
            this.setState({ books: cleanData })
        })
}


handleSearch = (e) => {
     console.log()
     this.setState({ searchField: e.target.value})
}
handleSort = (e) => {
    console.log(e.target.value)
    this.setState({ sort: e.target.value})
}

cleanData = (data) => {
    const cleanedData = data.body.items.map((book) => {
        if(book.volumeInfo.hasOwnProperty('imageLinks') === false){
            book.volumeInfo['imageLinks'] = {thumbnail : "https://upload.wikimedia.org/wikipedia/commons/a/ac/No_image_available.svg"};
        }
        
        else if(book.saleInfo.hasOwnProperty('buyLink') === false){
            book.volumeInfo['buyLink'] = 'Not Available';
        }

        else if(book.volumeInfo.hasOwnProperty('previewLink') === false){
            book.volumeInfo['previewLink'] = 'Not Available';
        }

        return book;
    })

    return cleanedData
}

render() {

    return (
        <div class="row">
                <div class="column left">
                <ul>
                        <li class="line">
                            <NavLink to="/adventure">
                                Adventure
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/action">
                                Action
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/romance">
                                Romance
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/horror">
                                Horror
                            </NavLink>
                        </li>
                        <li class="line">
                            <NavLink to="/fiction">
                                Fiction
                            </NavLink>
                        </li>
                    </ul>
                    
                </div>
                <div class="column right">
                    <div className="home">

                        
                            
                    <SearchField searchBook={this.searchBook} handleSearch={this.handleSearch} handleSort={this.handleSort}/>
                            <BookList books={this.state.books}/>

                                


</div>
</div>
</div>

    );
}
}
export default Home;