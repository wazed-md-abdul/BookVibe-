import React, { Suspense } from 'react';
import BookCard from '../../components/BookCard';
import { use } from 'react';


const promise = fetch('/booksData.json').then((res) => res.json());

const Books = () => {
    const data = use(promise);

    
    
    
    
    return (


        <>
        <div className='w-full max-w-4/5 mx-auto text-center mt-7'>
            <h1 className='my-6 text-4xl font-bold'>All Books</h1>
        </div>
        <div className='w-full max-w-4/5  bg-gray-100 rounded-2xl space-y-10  grid grid-cols-1 md:grid-cols-3 mx-auto'>
            <Suspense fallback={<div>Loading...</div>}>
                
                {
                data.map((book, index) => (
                    <BookCard img={book.image} category={book.category} title={book.bookName} author={book.author} rating={book.rating} id={book.bookId} tags={book.tags} key={index} />
                ))

            }
            </Suspense>
            
        </div>
        </>
    );
};

export default Books;