import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/Gallery.css';
import w1 from '../assets/w1.jpg';
import w2 from '../assets/w2.jpg';
import w3 from '../assets/w3.jpg';
import w4 from '../assets/w4.jpg';
import b1 from '../assets/b1.jpg';
import b2 from '../assets/b2.jpg';
import b3 from '../assets/b3.jpg';
import b4 from '../assets/b4.jpg';
import s1 from '../assets/s1.jpg';
import s2 from '../assets/s2.jpg';
import s3 from '../assets/s3.jpg';
import s4 from '../assets/s4.jpg';
import t2 from '../assets/t2.jpg';
import tech from '../assets/tech.jpg';
import t3 from '../assets/t3.jpg';
import t4 from '../assets/t4.jpg';
import e1 from '../assets/e1.jpg';
import e2 from '../assets/e2.jpg';
import e3 from '../assets/e3.jpg';
import e4 from '../assets/e4.jpg';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
const Gallery = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
    });
  }, []);

  const categories = [
    {
      name: 'Wedding',
      images: [
        w1,
        w2,
        w3,
        w4,
        w1,
      ],
    },
    {
      name: 'Birthday',
      images: [
        b1,
        b2,
        b3,
        b4,
        b2,
      ],
    },
    {
      name: 'Sports',
      images: [
        s1,
        s2,
        s3,
        s4,
        s1,
      ],
    },
    {
      name: 'Technology',
      images: [
        t2,
        tech,
        t3,
        t4,
        t2,
      ],
    },
    {
      name: 'Entertainment',
      images: [
        e1,
        e2,
        e3,
        e4,
        e1,
      ],
    },
  ];

  return (
    <>
      <Navbar></Navbar>
      <div className="gallery-container">
        <h1 className="gallery-heading">Event Categories</h1>
        {categories.map((category, index) => (
          <div key={index} className="category">
            <h2 className="category-title">{category.name}</h2>
            <div className="category-images">
              {category.images.map((image, idx) => (
                <div
                  key={idx}
                  className="image-container"
                  data-aos="fade-up"
                  data-aos-delay={`${idx * 200}`}
                >
                  <img
                    src={image}
                    alt={`${category.name} Event`}
                    className="event-image"
                  />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <Footer></Footer>
    </>
  );
};

export default Gallery;
