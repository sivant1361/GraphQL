import React from "react";
import { useQuery, useMutation } from "@apollo/client";
import { getAuthorsQuery, addBookMutation } from "../queries/queries";

function AddBook(props) {

  const DisplayAuthors = () => {
    const { loading, error, data } = useQuery(getAuthorsQuery);
    if (error) {
      console.log(error);
    } else if (loading) {
      return <option disabled>Loading authors</option>;
    } else {
      return data.authors.map((author) => {
        return (
          <option key={author.id} value={author.id}>
            {author.name}
          </option>
        );
      });
    }
  };

  var state = {
    name: "",
    authorId: "",
    genre: "",
  };

  const [addBook] = useMutation(addBookMutation);

  const SubmitForm = (e) => {
    addBook({
        variables: {
          name: state.name,
          genre: state.genre,
          authorId: state.authorId,
        },
      });
    state.name = state.genre = state.authorId="";
  };

  return (
    <form id="add-book" onSubmit={SubmitForm}>
      <div className="field">
        <label>Book name:</label>
        <input
          type="text"
          onChange={(e) => {
            state.name = e.target.value;
          }}
        />
      </div>
      <div className="field">
        <label>Genre:</label>
        <input type="text" onChange={(e) => (state.genre = e.target.value)} />
      </div>
      <div className="field">
        <label>Author:</label>
        <select onChange={(e) => (state.authorId = e.target.value)}>
          <option>Select author</option>
          {DisplayAuthors()}
        </select>
      </div>
      <button>+</button>
    </form>
  );
}

export default AddBook;
