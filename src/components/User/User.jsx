import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {

    const {id, name, email, phone} = user;
    
    return (
        <div className='border-2 border-green-300 p-5 rounded-2xl'>
            <h2 className='text-2xl'>Name: {name}</h2>
            <p>Email: {email}</p>
            <p>Phone: {phone}</p>
            <Link className='btn btn-primary hover:btn-secondary' to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

export default User;