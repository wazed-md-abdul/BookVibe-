import React from 'react';
import Books from './homePages.jsx/Books';
import BooksBanner from './homePages.jsx/BooksBanner';
const HomePage = () => {
    return (
        <div>
                <BooksBanner />
                <Books />
        </div>
    );
};

export default HomePage;