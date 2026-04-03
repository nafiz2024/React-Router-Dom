import React from 'react';
import { useLoaderData } from 'react-router';
import User from '../User/User';

const Users = () => {

    const users = useLoaderData();

    return (
        <div>
            <h1>Thank You for Using Our Website</h1>
            <div className="flex flex-col gap-5 mt-10">
                {
                    users.map(user => <User key={user.id} user={user} />)
                }
            </div>
        </div>
    );
};

export default Users;