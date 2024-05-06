import React, { useState } from 'react';
import { Transition } from '@headlessui/react';

const images = [
    'https://www.technogiq.com/images/compress/deskbg.webp',
    'https://www.technogiq.com/images/compress/duality.webp',
    'https://www.technogiq.com/images/compress/bigbold_3.webp',
    'https://www.technogiq.com/images/compress/bigbold_3.webp',
];

const Slider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative w-full h-96 overflow-hidden">
            {images.map((image, index) => (
                <Transition
                    key={index}
                    show={index === currentIndex}
                    enter="transition-opacity duration-1000 ease-out"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="transition-opacity duration-1000 ease-out"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <img
                        src={image}
                        alt={`Slider Image ${index + 1}`}
                        className="absolute inset-0 w-full h-full object-cover"
                    />
                </Transition>
            ))}
            <button
                className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none"
                onClick={prevImage}
            >
                Prev
            </button>
            <button
                className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-gray-800 text-white px-3 py-1 rounded-md focus:outline-none"
                onClick={nextImage}
            >
                Next
            </button>
        </div>
    );
};

export default Slider;
