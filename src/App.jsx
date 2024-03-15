
import './App.css'
import Blogs from './components/Blogs/Blogs'
import BookMarks from './components/BookMarks/BookMarks'
import Header from './components/Header/Header'


function App() {


  return (
    <div className='max-w-5xl mx-auto'>
    <Header></Header>

    <div className='md:flex '>
      <Blogs></Blogs>
      <BookMarks></BookMarks>
    </div>
    </div>
  )
}

export default App
