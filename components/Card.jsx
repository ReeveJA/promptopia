import React from 'react'

const Card = ({ title, description, imageUrl }) => {
    return (
        <div className="max-w-sm mt-12 rounded-lg border-slate-800 overflow-hidden shadow-lg">
            {/* Image */}
            <img className="w-full" src={imageUrl} alt="Card" />
            {/* Card Body */}
            <div className="px-6 py-4">
            {/* Title */}
            <div className="font-bold text-xl mb-2">{title}</div>
            {/* Description */}
            <p className="text-gray-700 text-base">{description}</p>
            </div>
        </div>
    );
  }
  
  export default Card;