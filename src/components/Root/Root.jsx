import React from 'react';
import Header from '../Header/Header';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../Footer/Footer';
import Sidebar from '../Sidebar/Sidebar';

const Root = () => {

    const navigation = useNavigation();
    const isNavigating = Boolean(navigation.location);

    return (
        <div className='flex flex-col justify-center items-center-safe'>
            <Header></Header>
            <div className="grid grid-cols-2 gap-5">
                <Sidebar></Sidebar>
                    {isNavigating && <span className="loading loading-ball loading-xl">Loading...</span>}
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Root;