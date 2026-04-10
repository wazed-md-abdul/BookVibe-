import React from 'react';

const ReadBooks = ({book}) => {
    const {image, title, author, category, rating,yearOfPublishing,publisher,tags,totalPages}= book;
    return (
        <div>
            <div className="flex items-center gap-6 bg-white rounded-2xl shadow-md p-5 w-full">
      {/* Book Cover */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt="Book cover"
          className="w-24 h-auto object-contain"
        />
      </div>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <h2 className="text-lg font-bold text-slate-800 leading-tight mb-0.5">
          {title}
        </h2>
        <p className="text-xs text-slate-400 mb-3">
          By : <span className="text-slate-600 font-medium">{author}</span>
        </p>

        {/* Tags */}
        <div className="flex flex-wrap items-center gap-2 mb-3">
          {tags.map((tag) => (
            <span
              key={tag}
              className="bg-indigo-50 text-indigo-500 text-xs font-semibold rounded-full px-3 py-0.5"
            >
              #{tag}
            </span>
          ))}
          <span className="flex items-center gap-1 text-slate-400 text-xs ml-1">
            <svg className="w-3 h-3" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <circle cx="12" cy="12" r="10" /><polyline points="12 6 12 12 16 14" />
            </svg>
            Year of Publishing: {yearOfPublishing}
          </span>
        </div>

        {/* Meta */}
        <div className="flex items-center gap-3 mb-4 flex-wrap">
          <span className="flex items-center gap-1 text-slate-500 text-xs">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
              <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Publisher: {publisher}
          </span>
          <div className="w-px h-4 bg-slate-200" />
          <span className="flex items-center gap-1 text-slate-500 text-xs">
            <svg className="w-3.5 h-3.5 text-slate-400" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" />
            </svg>
            Page {totalPages}
          </span>
        </div>

        {/* Bottom Row */}
        <div className="flex items-center gap-3 flex-wrap">
          <span className="bg-blue-50 text-blue-600 text-xs font-medium rounded-md px-3 py-1">
            Category: {category}
          </span>
          <div className="flex items-center gap-1">
            <span className="text-amber-400 text-sm">★</span>
            <span className="text-sm font-semibold text-slate-800">{rating}</span>
            <span className="text-xs text-slate-400">Rating</span>
          </div>
          <button className="ml-auto bg-green-500 hover:bg-green-600 text-white text-sm font-semibold rounded-lg px-5 py-2 transition-colors">
            View Details
          </button>
        </div>
      </div>
    </div>
        </div>
    );
};

export default ReadBooks;