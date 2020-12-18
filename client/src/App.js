import BookList from "./components/BookList";
import { ApolloClient, InMemoryCache } from "@apollo/client";
import { ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "http://localhost:4000/graphql",
  cache: new InMemoryCache(),
});

export default function App() {
  return (
    <ApolloProvider client={client}>
      <div id="main">
        <h1>AUTHOR AND BOOKS</h1>
        <BookList />
      </div>
    </ApolloProvider>
  );
}
