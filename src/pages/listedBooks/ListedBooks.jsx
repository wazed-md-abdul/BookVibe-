import React from 'react';
import { useContext } from 'react';
import { BookContext } from '../../Context/BookProvider';
import ReadBooks from './ReadBooks';
import WishListBooks from './WishListBooks';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import NoBooks from './NoBooks';
const ListedBooks = () => {

    const contextData = useContext(BookContext);

    const { readBooks, wishListBooks } = contextData;

    return (
        <>
            <div className='w-full max-w-4/5 bg-gray-100 rounded-2xl px-10 py-10 md:px-30 md:py-14 mx-auto'>

                <h1 className=' font-bold text-6xl text-center'>Books</h1>

                <Tabs>
                    <TabList className='gap-2.5'>
                        <Tab >Read Books ({readBooks.length})</Tab>
                        <Tab>WishList Books ({wishListBooks.length})</Tab>
                    </TabList>

                    <TabPanel>
                        {
                            readBooks.length === 0 ? <NoBooks /> :  readBooks.map(book => <ReadBooks book={book} />)
                        }
                        
                    </TabPanel>
                    <TabPanel>
                        {
                            wishListBooks.length === 0 ? <NoBooks /> : wishListBooks.map(book => <WishListBooks book={book} />)
                        }
                    </TabPanel>
                </Tabs>
                <div>


                </div>
            </div>
        </>
    );
};

export default ListedBooks;