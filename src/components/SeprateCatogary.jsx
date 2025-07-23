import React from 'react';
import { useParams } from 'react-router-dom';
import w1 from '../assets/w1.jpg'
import b1 from '../assets/b1.jpg'
import s1 from '../assets/s1.jpg'
import tech from '../assets/tech.jpg'
import e1 from '../assets/e1.jpg'
import Navbar from './Navbar';
import Footer from './Footer';

// Sample data for categories
const categoryDetails = {
    wedding: {
        name: "Wedding",
        image: w1,
        qualities: [
            "Romantic",
            "Elegant",
            "Timeless",
            "Joyous",
            "Celebratory"
        ]
    },
    birthday: {
        name: "Birthday",
        image: b1,
        qualities: [
            "Fun",
            "Exciting",
            "Memorable",
            "Colorful",
            "Personalized"
        ]
    },
    sports: {
        name: "Sports",
        image: s1,
        qualities: [
            "Energetic",
            "Competitive",
            "Skillful",
            "Team-oriented",
            "Exciting"
        ]
    },
    technology: {
        name: "Technology",
        image: tech,
        qualities: [
            "Innovative",
            "Cutting-edge",
            "Transformative",
            "Disruptive",
            "Efficient"
        ]
    },
    entertainment: {
        name: "Entertainment",
        image: e1,
        qualities: [
            "Fun",
            "Engaging",
            "Interactive",
            "Informative",
            "Creative"
        ]
    }
};

const SeprateCatogary = () => {
    const { categoryName } = useParams(); // Get the category name from the URL
    const category = categoryDetails[categoryName];

    if (!category) {
        return <div>Category not found</div>;
    }

    return (
        <>
            <Navbar></Navbar>
            <div className="max-w-4xl mx-auto py-8">
                <h1 className="text-3xl font-semibold text-center text-[#50c878]">{category.name}</h1>
                <div className="mt-6 text-center">
                    <img
                        src={category.image}
                        alt={category.name}
                        className="mx-auto rounded-lg shadow-lg"
                        style={{ width: "300px" }}
                    />
                    <div className="mt-4 space-y-2">
                        <h2 className="text-xl font-semibold text-[#50c878]">Key Qualities</h2>
                        <ul className="list-disc pl-5 text-gray-700">
                            {category.qualities.map((quality, index) => (
                                <li className='list-none' key={index}>{quality}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </>
    );
};

export default SeprateCatogary;
