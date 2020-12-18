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
    console.log(data);
    
    return(
        <div>
            <ul id="book-list">
                <li>Book List</li>
            </ul>
        </div>
    );
}

export default BookList;