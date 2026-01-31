import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import CardGrid from "./components/BookCard"; // your CardGrid file
import CartPage from "./components/CartPage";
import Footer from "./components/Footer";

const API_KEY = "AIzaSyAZeCJXokas2EqiZyXEQIU_zSgIKl4qkl0";
const URLS = {
  all: `https://www.googleapis.com/books/v1/volumes?q=&key=${API_KEY}&maxResults=40&startIndex=0`,
  fiction: `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=${API_KEY}&maxResults=40&startIndex=0`,
  drama: `https://www.googleapis.com/books/v1/volumes?q=subject:drama&key=${API_KEY}&maxResults=40&startIndex=0`,
  pets: `https://www.googleapis.com/books/v1/volumes?q=subject:pets&key=${API_KEY}&maxResults=40&startIndex=0`,
  psychology: `https://www.googleapis.com/books/v1/volumes?q=subject:psychology&key=${API_KEY}&maxResults=40&startIndex=0`,
  humor: `https://www.googleapis.com/books/v1/volumes?q=subject:humor&key=${API_KEY}&maxResults=40&startIndex=0`,
};

function App() {
  const [category, setCategory] = useState("fiction");
  const [books, setBooks] = useState([]);          // all fetched books
  const [filteredBooks, setFilteredBooks] = useState([]); // filtered by search

  // fetch books whenever category changes
  useEffect(() => {
    fetch(URLS[category])
      .then((res) => res.json())
      .then((data) => {
        const fetchedBooks = data.items || [];
        setBooks(fetchedBooks);
        setFilteredBooks(fetchedBooks); // reset filter on category change
      })
      .catch((err) => console.error(err));
  }, [category]);

  return (
    <BrowserRouter>
      <Navbar
        category={category}
        setCategory={setCategory}
        books={books}
        setFilteredBooks={setFilteredBooks}
      />
      <CardGrid books={filteredBooks} />
      <Routes>
        <Route path="/cart" element={<CartPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
