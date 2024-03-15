import PropTypes from 'prop-types';

function Bookmark({bookmark}) {
    const {title} = bookmark;
    return (
        <div className='text-center'>
            <h1 className='text-2xl p-4 m-4 bg-slate-100 rounded-2xl'>{title}</h1>
        </div>
    );
}
Bookmark.propTypes = {
    bookmark: PropTypes.object
}
export default Bookmark;