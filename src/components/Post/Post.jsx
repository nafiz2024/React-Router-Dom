import React from 'react';
import { Link } from 'react-router';

const Post = ({ post }) => {
    return (
        <div className='border-2 border-green-300 p-5 rounded-2xl my-5'>
            <h2>Title: {post.title}</h2>
            <Link className='btn btn-primary hover:btn-secondary' to={`/posts/${post.id}`}>
                Show Details
            </Link>
        </div>
    );
};

export default Post;