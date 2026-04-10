import { createBrowserRouter } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import HomePage from '../pages/HomePage'
import ErrorPage from '../pages/ErrorPage'
import Books from '../pages/homePages.jsx/Books'
import PageToRead from '../pages/PageToRead'
import BookDetails from '../components/BookDetails'
import ListedBooks from '../pages/listedBooks/ListedBooks'
const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    children: [
        {index: true, Component: HomePage},
        {path: "ListedBooks", Component: ListedBooks},
        {path: "page-to-read", element: <PageToRead/>},
        {path: "books/:id", Component: BookDetails, loader: async ({params})=>{
          const res = await fetch('/booksData.json');
          const books = await res.json();
          const book = books.find(b => b.bookId === parseInt(params.id));
          return book;
        }}
    ],
    errorElement: <ErrorPage />, 
  },
])

export default router