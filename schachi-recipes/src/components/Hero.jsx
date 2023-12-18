import React from 'react';

const Hero = () => {
    return (
        <section className="bg-orange/30">
            <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-12">
                <h1 className="mb-4 text-[50px] font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We
                    invest in the world’s potential</h1>
                <p className="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Here
                    at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value
                    and drive economic growth.</p>
                <div
                    className="flex flex-col mb-8 lg:mb-16 space-y-4 sm:flex-row sm:justify-center sm:space-y-0 sm:space-x-4">
                    <form className="w-full">
                        <label htmlFor="default-search"
                               className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>

                    </form>
                </div>

            </div>
        </section>
    );
};

export default Hero;