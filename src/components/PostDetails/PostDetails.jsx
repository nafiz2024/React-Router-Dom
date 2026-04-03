import React from 'react';
import { useLoaderData } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();

    return (
        <div className='border-2 border-green-300 p-5 rounded-2xl my-5 space-y-5'>
            <p className='text-2xl'>Title: {post.title}</p>
            <p>Body: {post.body}</p>
        </div>
    );
};

export default PostDetails;