import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router';
import userIcon from '../assets/user.png';
import { AuthContext } from './Provider/AuthContext';


const Navbar = () => {
    const { user, Logout } = useContext(AuthContext);

    const handleLogOut = () => {
        Logout()
            .then(() => {
                alert('Logged out successfully');
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <div className='flex justify-between items-center p-5'>
            <div className="div">{user && user.email}</div>
            <div className="nav flex gap-5 text-accent">
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/about'}>About</NavLink>
                <NavLink to={'/career'}>Career</NavLink>
            </div>
            <div className="login-btn flex gap-5 items-center">
                <img src={userIcon} alt="user icon" className='w-8 h-8 rounded-full' />
                {user ? (
                    <button onClick={handleLogOut} className='btn btn-primary px-10'>LogOut</button>
                ) : (
                    <Link to={'/auth/login'} className='btn btn-primary px-10'>Login</Link>
                )}
            </div>
        </div>
    );
};

export default Navbar;
