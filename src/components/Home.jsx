import React from 'react';
import { NavLink } from 'react-router-dom';
// import cinema from '../../public/cinema.jpg'

const Home = () => {
    return (
        <div className='my-9'>

            <div className="bg-cover bg-center rounded-xl h-screen" style={{ backgroundImage: "url('../../public/cinema-hall.jpg')" }}>
                {/* Your content goes here */}
                <div className='h-full w-full bg-[#171717] opacity-95 flex justify-center items-center rounded-xl'>
                    <div className='space-y-6 text-center'>

                        <h1 className='text-orange-600 text-4xl font-bold'>cine<span className='text-white text-6xl font-bold'>Search</span></h1>
                        <p className='text-white text-xl font-medium'>Discover your next favorite movie <br /> with our comprehensive cine search website.</p>
                        <div>
                            <NavLink to={'/movie-search'}>
                                <button className='text-white bg-orange-600 px-4 py-2 font-medium rounded hover:bg-white hover:text-black'>Find Movie</button>
                            </NavLink>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default Home;