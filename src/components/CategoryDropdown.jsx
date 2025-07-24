import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const CategoryDropdown = () => {
    const [isOpen, setIsOpen] = useState(false);


    const categories = [
        { name: "Wedding", id: "wedding" },
        { name: "Birthday", id: "birthday" },
        { name: "Sports", id: "sports" },
        { name: "Technology", id: "technology" },
        { name: "Entertainment", id: "entertainment" }
    ];

    const toggleDropdown = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="relative z-10 inline-block text-left">

            <button
                type="button"
                className="inline-flex justify-center cursor-pointer w-full rounded-md border border-[#50c878] bg-white px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#50c878] focus:ring-offset-2 focus:ring-offset-gray-100"
                onClick={toggleDropdown}
            >
                Category
                <svg
                    className="ml-2 -mr-1 h-5 w-5"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                >
                    <path
                        fillRule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clipRule="evenodd"
                    />
                </svg>
            </button>

            {/* Dropdown Menu */}
            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 w-56 rounded-md bg-[#50c878] shadow-lg ring-1 ring-[#50c878] ring-opacity-5 focus:outline-none"
                >
                    <div className="py-1">
                        {categories.map((category) => (
                            <Link
                                key={category.id}
                                to={`/category/${category.id}`}
                                className="text-white block px-4 py-2 text-sm hover:bg-white hover:text-[#50c878]"
                                onClick={() => setIsOpen(false)}
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default CategoryDropdown;
