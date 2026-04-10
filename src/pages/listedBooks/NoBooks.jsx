import React from 'react';

const NoBooks = () => {
    const onAdd = () => {
        window.location.href = '/';
    }
    return (
        <div>
            <div className="flex items-center justify-center p-8">
                <div className="bg-white border border-gray-100 rounded-2xl p-10 w-full text-center shadow-sm">
                    {/* Icon */}
                    <div className="w-16 h-16 mx-auto mb-5 bg-gray-50 rounded-xl flex items-center justify-center">
                        <svg
                            className="w-8 h-8 text-gray-400"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            viewBox="0 0 24 24"
                        >
                            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
                            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
                            <line x1="12" y1="8" x2="12" y2="14" />
                            <line x1="9" y1="11" x2="15" y2="11" />
                        </svg>
                    </div>

                    {/* Text */}
                    <h3 className="text-base font-medium text-gray-900 mb-1.5">No books yet</h3>
                    <p className="text-sm text-gray-400 mb-6 leading-relaxed">
                        Your collection is empty. Add your first book to get started.
                    </p>

                    {/* CTA */}
                    <button
                        onClick={onAdd}
                        className="text-sm px-5 py-2 rounded-lg border border-gray-200 text-gray-700 hover:bg-gray-50 transition-colors"
                    >
                        Add a book
                    </button>
                </div>
            </div>
        </div>
    );
};

export default NoBooks;