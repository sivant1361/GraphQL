import React from "react";
import { useQuery } from "@apollo/client";
import { getBookQuery } from "../queries/queries";

function BookDetails({ id }) {
  const { loading, error, data } = useQuery(getBookQuery, {
    variables: { id },
  });

  const displayBook = () => {
    if (error) {
      console.log(error);
    } else if (loading) {
      return <div>LOADING BOOKS</div>;
    } else {
      var book = data.book;
      if (book) {
        return (
          <div>
            <h2>{book.name}</h2>
            <p>{book.genre}</p>
            <p>{book.author.name}</p>
            <p>All books by this author:</p>
            <ul className="other-books">
              {book.author.books.map((item) => {
                return <li key={item.id}>{item.name}</li>;
              })}
            </ul>
          </div>
        );
      } else {
        return <div>No book selected...</div>;
      }
    }
  };

  return <div id="book-details">{displayBook()}</div>;
}

export default BookDetails;
