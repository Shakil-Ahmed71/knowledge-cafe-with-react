import PropTypes from "prop-types";
import { MdBookmarks } from "react-icons/md";

const Blog = ({ blog }) => {
  const {
    title,
    cover,
    author,
    author_img,
    posted_date,
    reading_time,
    hashtags,
  } = blog;

  return (
    <div className="mb-16 pt-3">
      <img
        className="rounded-2xl"
        src={cover}
        alt={`Cover picture of the title ${title} `}
      />

      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-3 mb-2">
          <img className="w-16 h-16 rounded-full" src={author_img} alt="" />
          <div className="mt-7">
            <h1 className="text-2xl">{author}</h1>
            <p>{posted_date}</p>
          </div>
        </div>

        <div className="">
          <span>{reading_time} min read</span>
          
          <button className="ml-2 items-center text-green-600">
            <MdBookmarks />
          </button>
        </div>
      </div>

      <h1 className="text-2xl">{title}</h1>
      <p className="mt-2">
        {hashtags.map((hash, idx) => (
          <span key={idx} className="ml-2">
            <a href="">#{hash}</a>
          </span>
        ))}
      </p>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
};
export default Blog;
