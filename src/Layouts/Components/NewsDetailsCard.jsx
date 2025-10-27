import React from "react";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {  title, details, image_url } = news;

  return (
    <div className="space-y-5">
      {/* 🖼️ Image */}
      <img
        src={image_url}
        alt={title}
        className="w-full h-[350px] object-cover"
      />

      {/* 📰 Content */}
      <div className="p-4">
        {/* 🔹 Title */}
        <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

        {/* 🔸 Description */}
        <p className="text-gray-600 text-sm mb-4">
         {details}
        </p>

        {/* 🔗 Link using id */}
        <Link
          to={`/category/${news.category_id}`}
          className="btn btn-secondary"
        >
        Back to Category
        </Link>
      </div>
    </div>
  );
};

export default NewsCard;
