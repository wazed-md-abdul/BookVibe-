import React, { useContext } from 'react';
import { useLoaderData } from 'react-router';
import { BookContext } from '../Context/BookProvider';

const BookDetails = () => {

     const data = useLoaderData();

    const contextData = useContext(BookContext);
    const {handleReadBooks, handleWishList} = contextData;

    return (
        <div className='w-full max-w-6xl mx-auto mt-8 px-4 sm:px-6 lg:px-8'>
            {/* Main Card */}
            <div className="bg-linear-to-br from-white via-gray-50 to-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">

                {/* Header with subtle gradient */}
                <div className="bg-linear-to-r from-blue-50 to-purple-50 px-6 py-4 border-b border-gray-100">
                    <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-linear-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
                        Book Details
                    </h1>
                </div>

                <div className="p-6 sm:p-8 lg:p-10">
                    <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">

                        {/* Left - Book Image */}
                        <div className="shrink-0 flex justify-center lg:justify-start">
                            <div className="bg-linear-to-br from-gray-100 to-gray-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={data.image}
                                    alt="Book cover"
                                    className="w-48 h-64 sm:w-56 sm:h-72 lg:w-64 lg:h-80 object-cover rounded-xl shadow-md"
                                />
                            </div>
                        </div>

                        {/* Right - Book Details */}
                        <div className="flex-1 space-y-6">

                            {/* Title & Author */}
                            <div className="space-y-2">
                                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                                    {data.bookName}
                                </h2>
                                <p className="text-lg text-gray-600 font-medium">
                                    By <span className="text-blue-600">{data.author}</span>
                                </p>
                                <div className="inline-flex items-center px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                                    {data.category}
                                </div>
                            </div>

                            {/* Rating Display */}
                            <div className="flex items-center space-x-2">
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <svg
                                            key={i}
                                            className={`w-5 h-5 ${i < Math.floor(data.rating) ? 'text-yellow-400' : 'text-gray-300'}`}
                                            fill="currentColor"
                                            viewBox="0 0 20 20"
                                        >
                                            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                                        </svg>
                                    ))}
                                </div>
                                <span className="text-lg font-semibold text-gray-900">{data.rating}</span>
                                <span className="text-gray-500">/ 5.0</span>
                            </div>

                            <div className="border-t border-gray-200 pt-6">
                                {/* Review */}
                                <div className="mb-6">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Review</h3>
                                    <p className="text-gray-700 leading-relaxed text-sm sm:text-base">
                                        {data.review}
                                    </p>
                                </div>

                                {/* Tags */}
                                <div className="mb-6">
                                    <h4 className="text-sm font-medium text-gray-600 mb-2">Tags</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {data.tags.map((tag, index) => (
                                            <span
                                                key={index}
                                                className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-linear-to-r from-green-100 to-emerald-100 text-green-800 border border-green-200"
                                            >
                                                #{tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Meta info */}
                                <div className="bg-gray-50 rounded-xl p-4 mb-6">
                                    <h4 className="text-sm font-medium text-gray-600 mb-3">Book Information</h4>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Pages:</span>
                                            <span className="font-semibold text-gray-900">{data.totalPages}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Publisher:</span>
                                            <span className="font-semibold text-gray-900">{data.publisher}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Year:</span>
                                            <span className="font-semibold text-gray-900">{data.yearOfPublishing}</span>
                                        </div>
                                        <div className="flex justify-between">
                                            <span className="text-gray-500">Book ID:</span>
                                            <span className="font-semibold text-gray-900">#{data.bookId}</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Buttons */}
                                <div className="flex flex-col sm:flex-row gap-3">
                                    <button
                                        className="flex-1 px-6 py-3 border-2 border-gray-300 rounded-xl text-sm font-semibold text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all duration-200 transform hover:scale-105"
                                        onClick={() => handleReadBooks(data)}
                                    >
                                        📖 Read Book
                                    </button>
                                    <button
                                        className="flex-1 px-6 py-3 bg-linear-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl text-sm font-semibold text-white transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-xl"
                                        onClick={() => handleWishList(data)}
                                    >
                                        ❤️ Add to Wishlist
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails; 