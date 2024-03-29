import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";


const Blogs = ({ handleAddBookmark, handleMarkAsRead }) =>{

    const [blogs, setBlogs] = useState([]);

    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    }, []);


    return(
        <div className="md:w-2/3 ">
            <h1 className="text-3xl text-center bg-slate-200 rounded-2xl mt-4">Blogs:{blogs.length}</h1>
        {
            blogs.map((blog) => <Blog
            
            handleMarkAsRead={handleMarkAsRead}
            handleAddBookmark={handleAddBookmark}
            key={blog.id} 
            blog={blog}
            ></Blog>)
        }
        </div>
    );
};

Blogs.propTypes = {
    handleAddBookmark: PropTypes.func,
    handleMarkAsRead: PropTypes.func
}
export default Blogs;