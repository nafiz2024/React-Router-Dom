import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {

    const user = useLoaderData();
    
    const {name, website} = user;

    return (
        <div>
            <h1 className='text-2xl'>Name: {name}</h1>
            <p>Website: {website}</p>
        </div>
    );
};

export default UserDetails;