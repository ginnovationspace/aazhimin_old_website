import React, { useState, useRef, useEffect } from 'react';
import { SearchIcon } from '@/public/Assets/images/images';
import Image from 'next/image';
import jsonData from './data.json';// Assuming your JSON file is in the same directory

const Search: React.FC = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<any[]>([]);
  const [notFound, setNotFound] = useState(false);
  const modalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const toggleSearch = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.stopPropagation();
    setIsSearchOpen(prevState => !prevState);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
      setIsSearchOpen(false);
    }
  };

  const handleSearch = () => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setNotFound(false); // Reset notFound state if query is empty
      return;
    }

    const filteredData = jsonData.filter(item =>
      item.title.toLowerCase().includes(searchQuery.trim().toLowerCase())
    );

    if (filteredData.length === 0) {
      setSearchResults([]);
      setNotFound(true); // Set notFound if no results found
    } else {
      setSearchResults(filteredData);
      setNotFound(false); // Reset notFound if results are found
    }
  };

  useEffect(() => {
    if (isSearchOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      inputRef.current?.focus();
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isSearchOpen]);

  useEffect(() => {
    // Automatically trigger search when searchQuery changes
    handleSearch();
  }, [searchQuery]);

  return (
    <>
      <button
        onClick={toggleSearch}
        className=""
        aria-label="Toggle Search"
      >
        <Image
          src={SearchIcon}
          alt="Search Icon"
          className="w-4 h-4 mt-2 hover:rotate-90 hover:animate-pulse focus:animate-bounce"
        />
      </button>

      {isSearchOpen && (
        <div className="absolute inset-0 mt-20 flex justify-center items-start px-10 bg-white h-screen bg-opacity-80 backdrop-blur-xl z-50">
          <div
            ref={modalRef}
            className="absolute h-1/6 inset-0 mt-5 flex justify-center items-start z-50"
            role="dialog"
            aria-modal="true"
          >
            <div className="relative w-full max-w-3xl mx-4">
              <input
                ref={inputRef}
                type="text"
                placeholder="Search..."
                className="w-full p-4 text-lg border-b-2 border-gray-300 bg-white focus:outline-none focus:border-blue-500 rounded-t-md"
                aria-label="Search Input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              {notFound && (
                <p className="text-red-500 mt-2">No results found</p>
              )}

              {searchResults.length > 0 && (
                <ul className="mt-4">
                  {searchResults.map((result) => (
                    <li key={result.id} className="border-b border-gray-200 py-2">
                      <h3 className="text-lg font-medium">{result.title}</h3>
                      <p className="text-gray-600">{result.body}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Search;
