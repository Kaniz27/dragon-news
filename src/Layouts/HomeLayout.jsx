import React from 'react';
import { Outlet } from 'react-router';
import Header from './Components/Header';

const HomeLayout = () => {
    return (
        <div>
            <header>
                <Header></Header>
            </header>
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