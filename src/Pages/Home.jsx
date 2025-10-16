import React from 'react';

const Home = () => {
    return (
        <div className="hero  text-white">
            <div className="hero-content flex-col lg:flex-row">
                <img
                    src="https://firebase.google.com/static/images/brand-guidelines/logo-logomark.png"
                    className="max-w-sm rounded-lg shadow-2xl"
                />
                <div>
                    <h1 className="text-5xl font-bold animate-bounce">FireBase Authentication</h1>
                    <p className="py-6">
                        Stay Tuned!!!!!
                    </p>
                    <button className="btn shadow-none text-white bg-black">Sign IN</button>
                </div>
            </div>
        </div>
    );
};

export default Home;