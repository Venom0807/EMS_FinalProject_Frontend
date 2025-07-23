import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import lahore from '../assets/lahore.jpg';
import karachi from '../assets/karachi.jpg';
import islamabad from '../assets/islamabad.jpg';
import multan from '../assets/multan.jpg';
import babekhyber from '../assets/babekhyber.jpg';

const cities = [
    { name: 'Lahore', image: lahore },
    { name: 'Karachi', image: karachi },
    { name: 'Islamabad', image: islamabad },
    { name: 'Multan', image: multan },
    { name: 'Peshawar', image: babekhyber },
];

const CitySlider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const index = currentIndex === 0 ? cities.length - 1 : currentIndex - 1;
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        const index = currentIndex === cities.length - 1 ? 0 : currentIndex + 1;
        setCurrentIndex(index);
    };

    return (
        <>
            <h2 className='flex justify-center items-center mb-4 mt-4 text-[#50c878] text-[1.4rem]'>See Current Events In Cities</h2>
            <div className="relative w-[80%] m-auto overflow-hidden h-56 md:h-96 rounded-lg">
                {/* Slide */}
                <div className="relative w-full h-full">
                    <Link
                        to={`/city/${cities[currentIndex].name.toLowerCase()}`}
                        className="block w-full h-full"
                    >
                        <img
                            src={cities[currentIndex].image}
                            alt={cities[currentIndex].name}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                            <h2 className="text-white text-3xl md:text-5xl font-bold">
                                {cities[currentIndex].name}
                            </h2>
                        </div>
                    </Link>
                </div>

                {/* Navigation Buttons */}
                <button
                    onClick={prevSlide}
                    className="absolute top-1/2 left-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full z-10"
                >
                    ◀
                </button>
                <button
                    onClick={nextSlide}
                    className="absolute top-1/2 right-4 -translate-y-1/2 bg-white/30 hover:bg-white/60 text-white p-2 rounded-full z-10"
                >
                    ▶
                </button>

                {/* Dots */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
                    {cities.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-[#50c878]' : 'bg-white/50'}`}
                        />
                    ))}
                </div>
            </div>
        </>
    );
};

export default CitySlider;
