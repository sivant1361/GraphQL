import React,{ useState } from "react";
import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

import BookDetails from "./BookDetails";

function BookList() {
  const { loading, error, data } = useQuery(getBooksQuery);
  var [selected,changeSelected] = useState(null);

  const displayBooks = () => {
    var books = data;
    if (error) {
      console.log(error);
    } else if (loading) {
      return <div>LOADING BOOKS</div>;
    } else {
      return data.books.map((book) => {
        return (
          <li
            key={book.id}
            onClick={() => {
            changeSelected(book.id);
            console.log(selected);
            }}
          >
            {book.name}
          </li>
        );
      });
    }
    console.log(books);
  };

  return (
    <div>
      <ul id="book-list">{displayBooks()}</ul>
      
      <BookDetails id={selected} />
    </div>
  );
}

export default BookList;
