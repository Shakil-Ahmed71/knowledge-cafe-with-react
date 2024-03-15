
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'



function App() {

  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleAddBookmark = (blog) =>{
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
    
  };

  const handleMarkAsRead = (id, time) => {
   const newReadingTime = readingTime + time;
   setReadingTime(newReadingTime);

   const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id)
   setBookmarks(remainingBookmarks);
  }

  return (
    <div className='max-w-5xl mx-auto'>
    <Header></Header>

    <div className='md:flex '>
      <Blogs 
      handleAddBookmark={handleAddBookmark}
      handleMarkAsRead={handleMarkAsRead}
      
      ></Blogs>

      <BookMarks 
      bookmarks={bookmarks}
      readingTime={readingTime}
      ></BookMarks>
    </div>
    </div>
  )
}

export default App
