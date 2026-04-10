import React from 'react';
import { Link } from 'react-router';

const BookCard = ({img, title, author, category, rating, id, tags = []}) => {


  return (
    <Link to={`/books/${id}`} className="group w-full max-w-sm mx-auto">
      <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 overflow-hidden">

        {/* Book image */}
        <div className="bg-linear-to-br from-gray-50 to-gray-100 rounded-t-2xl flex items-center justify-center py-8 px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-linear-to-br from-blue-50/20 to-purple-50/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          <img
            src={img}
            alt="Book cover"
            className="w-32 h-40 sm:w-36 sm:h-44 md:w-40 md:h-48 object-cover rounded-lg shadow-md group-hover:shadow-lg transition-shadow duration-300"
          />
        </div>

        {/* Content */}
        <div className="p-4 sm:p-5 space-y-3">

          {/* Tags */}
          <div className="flex gap-2 flex-wrap">
            {tags.slice(0, 2).map((tag, index) => (
              <span
                key={index}
                className="text-xs font-medium text-green-700 bg-linear-to-r from-green-100 to-emerald-100 px-2.5 py-1 rounded-full border border-green-200"
              >
                {tag}
              </span>
            ))}
            {tags.length > 2 && (
              <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                +{tags.length - 2}
              </span>
            )}
          </div>

          {/* Title & Author */}
          <div>
            <h3 className="text-sm sm:text-base font-bold text-gray-900 leading-tight line-clamp-2 group-hover:text-blue-600 transition-colors duration-200">
              {title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-500 mt-1 font-medium">
              By <span className="text-gray-700">{author}</span>
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-100"></div>

          {/* Genre & Rating */}
          <div className="flex items-center justify-between">
            <span className="text-xs sm:text-sm text-gray-600 font-medium bg-gray-50 px-2 py-1 rounded-md">
              {category}
            </span>
            <div className="flex items-center gap-1.5 bg-yellow-50 px-2 py-1 rounded-md">
              <span className="text-xs sm:text-sm font-bold text-yellow-700">{rating}</span>
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* Hover indicator */}
          <div className="pt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="text-center">
              <span className="text-xs text-blue-600 font-medium">View Details →</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;