import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const PostDetails = () => {

    const post = useLoaderData();

    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1);
    }

    return (
        <div className='border-2 border-green-300 p-5 rounded-2xl my-5 space-y-5'>
            <p className='text-2xl'>Title: {post.title}</p>
            <p>Body: {post.body}</p>
            <button className='btn btn-primary hover:btn-secondary' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;