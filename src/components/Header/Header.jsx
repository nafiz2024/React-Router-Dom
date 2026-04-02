import React from 'react';
import { NavLink } from 'react-router';

const Header = () => {
    return (
        <div>
           <h1>This is Header</h1>
           <nav>
            <NavLink className='btn btn-primary focus:btn-secondary' to="/">Home</NavLink>
            <NavLink className='btn btn-primary focus:btn-secondary' to="/mobiles">Mobiles</NavLink>
            <NavLink className='btn btn-primary focus:btn-secondary' to="/laptops">Laptops</NavLink>
           </nav>
        </div>
    );
};

export default Header;