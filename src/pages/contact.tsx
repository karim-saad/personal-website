import React from 'react';
import { Link } from 'gatsby';
import Navbar from '../components';

export default function ContactPage() {
    return (
        <>
            <Navbar />
            <div className='px-5'>
                <Link to='https://github.com/karim-saad'>
                    <p>GitHub</p>
                </Link>
                <Link to='https://www.linkedin.com/in/karimsaad47/'>
                    <p>
                        LinkedIn
                    </p>
                </Link>
            </div>
        </>
    )
}
