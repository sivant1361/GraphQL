import React, { Component } from "react";
import { useQuery, gql } from '@apollo/client';

const getBooksQuery =gql`
    {
        books{
            name
            id
        }
    }
`


function BookList() {
    const { loading, error, data } = useQuery(getBooksQuery);

    const displayBooks=()=>{
        var books = data;
        if(loading){
            return(
                <div>LOADING BOOKS</div>
            );
        }else{
            return data.books.map(book => {
                return(<li key={book.id}>{book.name}</li>)
            })
        }
        console.log(books);
    }

    return(
        <div>
            <ul id="book-list">
                {displayBooks()}
            </ul>
        </div>
    );
}

export default BookList;