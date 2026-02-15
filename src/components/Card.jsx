import React from "react";

const Card = ({ image }) => {
  return (
    <div className="bg-gray-900 rounded-xl overflow-hidden shadow-lg w-72 hover:scale-105 transition duration-300">
      <img
        src={image.download_url}
        alt={image.author}
        className="w-full h-52 object-cover"
      />

      <div className="p-4">
        <h2 className="text-sm font-semibold text-gray-300">
          {image.author}
        </h2>
      </div>
    </div>
  );
};

export default Card;
