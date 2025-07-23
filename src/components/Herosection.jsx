import React from 'react'
import '../styles/Herosection.css'
import { Link } from 'react-router-dom'
const Herosection = () => {
    return (
        <>

            <div class="relative my-5 heroimage flex w-full h-[90vh]  p-1 flex-col items-center sm:mt-5">

                <h1
                    class="mt-8 max-w-sm bg-gradient-to-br from-[#50c878] via-[#56f78c] to-gray-500 bg-clip-text text-center text-4xl font-extrabold text-transparent sm:max-w-4xl sm:text-6xl">
                    Streamline Every Event From Start to Finish
                </h1>
                <span class="mt-8 max-w-lg text-center text-[1rem] leading-relaxed text-white">
                    From intimate weddings to grand celebrations, our event management platform handles every detail so you can focus on what truly matters — the experience.
                </span>
                <p class="mt-3 rounded text-white border px-3 py-1 shadow">
                    🎁 <span class="text-accent text-white font-semibold">10% off</span> for the first 100 customers!
                </p>
                <div class="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-0 sm:gap-x-4">
                    <Link to='/events'
                        class="flex flex-row items-center justify-center gap-x-2 rounded-lg text-white px-10 py-3 bg-[#50c878]">

                        Explore Now
                    </Link>
                    <Link to="/bookevent"
                        class="flex flex-row items-center justify-center gap-x-2 rounded-lg border border-[#50c878] px-10 py-3 text-[#50c878]">
                        Start Planning
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Herosection