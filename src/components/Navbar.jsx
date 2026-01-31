import React, { useState } from "react";

const Navbar = ({ category, setCategory, books, setFilteredBooks }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { label: "All Books", value: "all" },
    { label: "Fiction", value: "fiction" },
    { label: "Drama", value: "drama" },
    { label: "Pets", value: "pets" },
    { label: "Psychology", value: "psychology" },
    { label: "Humor", value: "humor" },
  ];

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filtered = books.filter(
      (book) =>
        book.volumeInfo?.title?.toLowerCase().includes(term.toLowerCase()) ||
        book.volumeInfo?.authors?.[0]?.toLowerCase().includes(term.toLowerCase())
    );

    setFilteredBooks(filtered);
  };

  return (
<>
   <div className="shadow-lg p-4 mb-6 flex flex-col sm:flex-row items-center sm:justify-between gap-3 sm:gap-0">
  
  <h1 className="text-2xl sm:text-3xl font-bold text-black text-center sm:text-left">
    BookHaven
  </h1>

  
  <p className="text-gray-600 text-sm sm:text-base text-center sm:text-left">
    Discover your next favorite story from our curated collection
  </p>


  <h1
    onClick={() => navigate("/cart")}
    className="text-2xl sm:text-2xl cursor-pointer hover:text-blue-600"
  >
    🛒 Cart
  </h1>
</div>

    <nav className="bg-gradient-to-r from-gray-300 via-white to-gray-300 p-4">
      <input
        type="text"
        placeholder="Search titles, authors..."
        value={searchTerm}
        onChange={handleSearch}
        className="w-full p-2 rounded mb-4"
      />
      <div className="flex flex-wrap gap-4">
        {categories.map((cat) => (
          <button
            key={cat.value}
            onClick={() => setCategory(cat.value)}
            className={`px-3 py-1 rounded-full ${
              category === cat.value
                ? "bg-blue-500 text-white"
                : "bg-white text-black hover:bg-black hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>
    </nav></>
  );
};

export default Navbar;
