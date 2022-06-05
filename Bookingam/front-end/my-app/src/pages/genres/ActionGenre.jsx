import React, { Component } from "react";
import SearchField from "../../components/SearchField";
import request from "superagent";
import BookList from "../../components/bookGenerate/BookList";
import { NavLink } from "react-router-dom";
import "../pagesCSS/page.css";

class Action extends Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      searchField: "",
    };
  }

  searchBook = (e) => {
    e.preventDefault();
    request
      .get("https://www.googleapis.com/books/v1/volumes")
      .query({ q: this.state.searchField })
      .then((data) => {
        this.setState({ books: [...data.body.items] });
      });
  };
  handleSearch = (e) => {
    this.setState({ searchField: e.target.value });
  };
  render() {
    return (
      <div class="row">
        <div class="column left">
          <ul>
            <li class="line">
              <NavLink to="/adventure">Adventure</NavLink>
            </li>
            <li class="line">
              <NavLink to="/action">Action</NavLink>
            </li>
            <li class="line">
              <NavLink to="/romance">Romance</NavLink>
            </li>
            <li class="line">
              <NavLink to="/horror">Horror</NavLink>
            </li>
            <li class="line">
              <NavLink to="/fiction">Fiction</NavLink>
            </li>
          </ul>
        </div>
        <div class="column right">
          <div className="home">
            <SearchField
              searchBook={this.searchBook}
              handleSearch={this.handleSearch}
            />
            <BookList books={this.state.books} />
          </div>
        </div>
      </div>
    );
  }
}
export default Action;
