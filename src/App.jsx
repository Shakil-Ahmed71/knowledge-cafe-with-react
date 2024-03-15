
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'



function App() {

  const [bookmarks, setBookmarks] = useState([]);

  const handleAddBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  };

  return (
    <div className='max-w-5xl mx-auto'>
    <Header></Header>

    <div className='md:flex '>
      <Blogs 
      handleAddBookmark={handleAddBookmark}
      ></Blogs>

      <BookMarks bookmarks={bookmarks}></BookMarks>
    </div>
    </div>
  )
}

export default App
