import React, { useEffect, useState } from "react";


const API_KEY = "AIzaSyAZeCJXokas2EqiZyXEQIU_zSgIKl4qkl0";


const URLS = {
  all: `https://www.googleapis.com/books/v1/volumes?q=&key=${API_KEY}&maxResults=40&startIndex=0`,
  fiction: `https://www.googleapis.com/books/v1/volumes?q=subject:fiction&key=${API_KEY}&maxResults=40&startIndex=0`,
  drama: `https://www.googleapis.com/books/v1/volumes?q=subject:drama&key=${API_KEY}&maxResults=40&startIndex=0`,
  pets: `https://www.googleapis.com/books/v1/volumes?q=subject:pets&key=${API_KEY}&maxResults=40&startIndex=0`,
  psychology: `https://www.googleapis.com/books/v1/volumes?q=subject:psychology&key=${API_KEY}&maxResults=40&startIndex=0`,
  humor: `https://www.googleapis.com/books/v1/volumes?q=subject:humor&key=${API_KEY}&maxResults=40&startIndex=0`,
};


const CATEGORY_IMAGES = {
  fiction: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383?auto=format&fit=crop&w=800&q=80",
  drama: "https://images.unsplash.com/photo-1601582580543-d5423e4b9463?auto=format&fit=crop&w=800&q=80",
  pets: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?auto=format&fit=crop&w=800&q=80",
  psychology: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=800&q=80",
  humor: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?auto=format&fit=crop&w=800&q=80",
  all: "https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&w=800&q=80",
};


 const BookCard = ({ title, author, price, categories, rating, image }) => {
  return (
    <div className="bg-white shadow-lg rounded-lg p-4 flex flex-col items-center">

      <div className="flex justify-between items-center w-full">
        <button className="px-2 py-0 bg-white border border-gray-400 rounded-md ">
          {categories || "Fiction"}
        </button>

        <p className="text-gray-600 text-sm">
          {rating || "4.5"} <span className="text-yellow-400">★</span>
        </p>
      </div>

      
      <div className="w-full h-80 rounded mb-4 mt-4 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover"
        />
      </div>

      <h2 className="font-bold text-lg mb-2">{title}</h2>
      <p className="text-gray-600 text-sm">{author}</p>
      <p>
        A masterpiece of American literature. The symbolism and prose are incredible
      </p>

      <div className="w-full flex justify-between items-center mt-auto">
        <h2 className="font-bold text-lg">{price}</h2>
        <button className="bg-black text-white px-4 py-1 rounded hover:bg-orange-500 transition-colors">
          🛒 Add
        </button>
      </div>
    </div>
  );
};


const CardGrid = ({ books }) => {
  return (
    <div className="p-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.volumeInfo?.title}
            author={book.volumeInfo?.authors?.[0] || "Unknown"}
            categories={book.volumeInfo?.categories?.[0] || "Fiction"}
            rating={book.volumeInfo?.averageRating}
            price={
              book.saleInfo?.listPrice
                ? `$${book.saleInfo.listPrice.amount}`
                : "$14.99"
            }
            image={
              book.volumeInfo?.imageLinks?.thumbnail
                ? book.volumeInfo.imageLinks.thumbnail.replace("http:", "https:")
                : CATEGORY_IMAGES["all"]
            }
          />
        ))}
      </div>
    </div>
  );
};

export default CardGrid;

