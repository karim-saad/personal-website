import React from 'react';
import Navbar from '../components';

export default function LandingPage() {
    return (
        <>
            <Navbar />
            <div className="px-5">
                <p>
                    Welcome to my portfolio!
                </p>
                <p>
                    I am a recent Computer Science graduate from UNSW, currently working as a Software Developer.
                    I am passionate about building software from the floor up, and love seeing my work being used at scale.
                    I am confident with a wide range of software development skills, and wish to continue learning more every day.
                </p>
            </div>
        </>
    )
}
