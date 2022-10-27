import React from 'react';
import { useState } from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../contexts/UserContext';

const Header = () => {
    const [toggle, setToggle] = useState(true);
    const { user, logOut } = useContext(AuthContext)

    const handleToggle = () => {
        setToggle(!toggle);
    }
    return (
        <div>
             {toggle ? <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <i className="ri-menu-2-line ri-2x"></i>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 mb-2 text-center p-2 shadow bg-base-100 rounded-box w-52">
                            <Link className='hover:text-pink-600' to='/'>Home</Link>
                            <Link className='hover:text-pink-600' to='/courses'>Courses</Link>
                            <Link className='hover:text-pink-600' to='/faq'>FAQ</Link>
                            <Link className='hover:text-pink-600' to='/blog'>Blog</Link>
                            <input type="checkbox" className="toggle" onClick={handleToggle} />
                            <small className='text-xs'>Dark Mode: OFF</small>

                        </ul>
                    </div>
                    <Link to='/' className="font-extrabold text-3xl ml-10"><i className="ri-quill-pen-fill ri-lg"></i>courseLab</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <div className='space-x-8 text-md'>
                            <Link className='hover:text-pink-600' to='/'>Home</Link>
                            <Link className='hover:text-pink-600' to='/courses'>Courses</Link>
                            <Link className='hover:text-pink-600' to='/faq'>FAQ</Link>
                            <Link className='hover:text-pink-600' to='/blog'>Blog</Link>
                            <input type="checkbox" className="toggle" onClick={handleToggle} />
                            <small className='text-xs'>Dark Mode: OFF</small>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <button className="tooltip tooltip-left tooltip-secondary rounded-full" data-tip={user.displayName}><div className="avatar online mr-4">
                                <div className="w-14 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div></button>
                            <span className='mr-3'>{user?.email}</span>
                            <Link onClick={logOut} className="border-2 border-gray-800 px-3 py-1 rounded-lg hover:bg-violet-600 hover:text-white hover:border-violet-600 mr-4">Sign Out</Link>
                        </>
                        :
                        <>
                            <Link to='/login' className="border-2 border-gray-800 px-3 py-1 rounded-lg hover:bg-violet-600 hover:text-white hover:border-violet-600 mr-4">Login</Link>
                            <Link to='/register' className="border-2 border-gray-800 px-3 py-1 rounded-lg hover:bg-violet-600 hover:text-white hover:border-violet-600 mr-4">Register</Link>
                        </>
                    }
                </div>
            </div>
            :
            <div className="navbar bg-gray-800 text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <i className="ri-menu-2-line ri-2x"></i>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 mb-2 text-center p-2 shadow bg-gray-800 text-white rounded-box w-52">
                            <Link className='hover:text-pink-600' to='/'>Home</Link>
                            <Link className='hover:text-pink-600' to='/courses'>Courses</Link>
                            <Link className='hover:text-pink-600' to='/faq'>FAQ</Link>
                            <Link className='hover:text-pink-600' to='/blog'>Blog</Link>
                            <input type="checkbox" className="toggle" onClick={handleToggle} />
                            <small className='text-xs'>Dark Mode: ON</small>

                        </ul>
                    </div>
                    <Link to='/' className="font-extrabold text-3xl ml-10"><i className="ri-quill-pen-fill ri-lg"></i>courseLab</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        <div className='space-x-8 text-md'>
                            <Link className='hover:text-pink-600' to='/'>Home</Link>
                            <Link className='hover:text-pink-600' to='/courses'>Courses</Link>
                            <Link className='hover:text-pink-600' to='/faq'>FAQ</Link>
                            <Link className='hover:text-pink-600' to='/blog'>Blog</Link>
                            <input type="checkbox" className="toggle" onClick={handleToggle} />
                            <small className='text-xs'>Dark Mode: ON</small>
                        </div>
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.uid ?
                        <>
                            <button className="tooltip tooltip-left tooltip-secondary rounded-full" data-tip={user.displayName}><div className="avatar online mr-4">
                                <div className="w-14 rounded-full">
                                    <img src={user?.photoURL} alt='' />
                                </div>
                            </div></button>
                            <span className='mr-3'>{user?.email}</span>
                            <Link onClick={logOut} className="border-2 border-white px-3 py-1 rounded-lg hover:bg-violet-600 hover:text-white hover:border-violet-600 mr-4">Sign Out</Link>
                        </>
                        :
                        <>
                            <Link to='/login' className="border-2 border-white px-3 py-1 rounded-lg hover:bg-violet-600 hover:text-white hover:border-violet-600 mr-4">Login</Link>
                            <Link to='/register' className="border-2 border-white px-3 py-1 rounded-lg hover:bg-violet-600 hover:text-white hover:border-violet-600 mr-4">Register</Link>
                        </>
                    }
                </div>
            </div>}

        </div>
    );
};

export default Header;