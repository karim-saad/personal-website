import React from 'react';
import { Link } from 'gatsby';

const Navbar = () => {
    return (
        <div className='flex justify-between p-5 bg-blue-200'>
            <Link to='/'>
                <p className='text-xl'>Karim Saad</p>
            </Link>
            <div className='flex'>
                <Link to='/work' className='mr-2'>
                    <p>Work</p>
                </Link>
                <Link to='/contact'>
                    <p>Contact</p>
                </Link>
            </div>
        </div>
    )
}

export default Navbar;
