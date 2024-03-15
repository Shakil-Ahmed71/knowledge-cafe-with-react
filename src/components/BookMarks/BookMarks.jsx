import PropTypes from 'prop-types'
import Bookmark from '../BookMark/Bookmark';

const BookMarks = ({ bookmarks }) => {

    return (
        <div className="md:w-1/3 bg-slate-200 mt-4 rounded-2xl ml-4">
            <h1 className='text-2xl text-center mt-4'>Bookmarks: {bookmarks.length}</h1>

            {
                bookmarks.map(bookmark => <Bookmark key={bookmark.div} bookmark={bookmark}></Bookmark>)
            }
        </div>
    )
}

BookMarks.propTypes = {
    bookmarks: PropTypes.array
}
export default BookMarks;