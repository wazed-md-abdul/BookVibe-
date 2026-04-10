import React, { createContext, useState } from 'react';
import { toast } from 'react-toastify';
export const BookContext = createContext();
const BookProvider = ({children}) => {
    const [readBooks,setReadBooks]=useState([])
    const handleReadBooks = (data) => {
        
    const isExist = readBooks.find(book => book.bookId == data.bookId);
    if(!isExist){
        setReadBooks([...readBooks,data])
        toast.success("You have successfully added this book on page to read")
    }       
        else{
            toast.error("You have already added this book on page to read")
        }    
    }

    const [wishListBooks,setWishListBooks]=useState([])
    const handleWishList = (data) => {
    
        const isExist = wishListBooks.find(book => book.bookId == data.bookId);
    if(!isExist){
        setWishListBooks([...wishListBooks,data])
         toast.success("You have successfully added this book on wishlist")
    }       
        else{
            toast.error("You have already added this book on wishList")
        }    
    }

    
    const data = {
        handleReadBooks,
        handleWishList,
        readBooks,
        wishListBooks,
    }

    return (
        <BookContext.Provider value={data}>
            
            {children}
        </BookContext.Provider>
    );
};

export default BookProvider;