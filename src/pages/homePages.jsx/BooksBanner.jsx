import React from 'react';

const BooksBanner = () => {
  return (
    <div className="w-full max-w-4/5 bg-gray-100 rounded-2xl px-10 py-10 md:px-30 md:py-14 flex flex-col md:flex-row items-center justify-between gap-8 mx-auto">
      
      {/* Left content */}
      <div className="w-full md:w-1/2">
        <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight mb-6 max-w-3xl">
          Books to Freshen Up Your Bookshelf
        </h2>
        
        <a
          href="#"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold text-sm px-6 py-3 rounded-lg transition-colors"
        >
          View The List
        </a>
      </div>

      {/* Book image */}
      <img
        src="/thedatingbook.png"
        alt="Book cover"
        className="w-full max-w-xs md:max-w-sm object-contain"
      />

    </div>
  );
};

export default BooksBanner;