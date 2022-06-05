import React from 'react';
import BookCard from './BookCard';
import { Container, Row} from 'react-bootstrap'
const BookList = (props) => {
    return(
        <div>
            <Container className="px-4" style={{ paddingTop: "3%", paddingBottom: "3%" }}>
            <Row>
           
            {
                props.books.map((book, i) => {
                    return <BookCard 
                            key = {i}
                            image={book.volumeInfo.imageLinks.thumbnail}
                            title ={book.volumeInfo.title}
                            author={book.volumeInfo.authors}
                            genre={book.volumeInfo.categories}
                            buylink={book.saleInfo.buyLink}
                            reviewlink={book.volumeInfo.reviewLink}
                            />
                            
                })
            }
            
            </Row>
            </Container>
        </div>
    )
}

export default BookList;
