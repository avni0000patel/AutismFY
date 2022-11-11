import React from "react";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./components/pages/Home/Home";
import Signup from "./components/pages/Signup";
import Login from "./components/pages/Login";
import SinglePost from "./components/pages/SinglePost";
import Post from './components/pages/Post/Post';
import TodoList from "./components/pages/Todo/TodoList";
import Note from "./components/pages/Notes/Note";
import ProfileA from "./components/pages/ProfileA/ProfileB";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "./App.css";

// Construct our main GraphQL API endpoint
const httpLink = createHttpLink({
  uri: "/graphql",
});

// Construct request middleware that will attach the JWT token to every request as an `authorization` header
const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = localStorage.getItem("id_token");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  // Set up our client to execute the `authLink` middleware prior to making the request to our GraphQL API
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
        <div className="flex-column justify-flex-start min-100-vh">
          <Header />
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<Signup />} />
              <Route path="/post" element={<Post />} />
              <Route path="/posts/:postId" element={<SinglePost />} />
              <Route className='todo-app' path="/todoList" element={<TodoList />} />
              <Route path="/notes" element={<Note />} />
              <Route path="/me" element={<ProfileA />} />
              <Route path="/profiles/:username" element={<ProfileA />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
