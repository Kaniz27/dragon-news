import React from 'react';
import { Outlet } from 'react-router';
import Header from './Components/Header';
import LatestNews from './Components/LatestNews';
import Navbar from '../Navbar';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
            
            <section className='w-11/12 mx-auto py-3'>
                <LatestNews></LatestNews>
            </section>
            <nav className='w-11/12 mx-auto py-3'>
                <Navbar></Navbar>
            </nav>
            <main>
               
                <section className='left-nav'>
                    <Outlet></Outlet>
                </section>
                <section className='right-nav'></section>
            </main>
        </div>
    );
};

export default HomeLayout;