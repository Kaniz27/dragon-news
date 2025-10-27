import React from "react";
import { FaRegBookmark, FaStar, FaEye } from "react-icons/fa";
import { Link } from "react-router";

const NewsCard = ({ news }) => {
  const {
    id,
    title,
    author,
    image_url,
    details,
    rating,
    total_view,
    others,
  } = news;

  return (
    <div className="card bg-base-100 shadow-md border border-gray-200">
      {/* Header */}
      <div className="flex justify-between items-center px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={author.img}
            alt={author.name}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-sm">{author.name}</h3>
            <p className="text-xs text-gray-500">
              {new Date(author.published_date).toISOString().split("T")[0]}
            </p>
          </div>
        </div>
        <FaRegBookmark className="text-gray-500 text-lg cursor-pointer hover:text-primary" />
      </div>

      {/* Title */}
      <h2 className="font-bold text-lg px-4">{title}</h2>

      {/* Image */}
      <figure className="px-4 pt-3">
        <img
          src={image_url}
          alt={title}
          className="rounded-lg w-full object-cover"
        />
      </figure>

      {/* Description */}
      <div className="px-4 py-3">
        <p className="text-sm text-gray-600">
          {details.slice(0, 200)}...
         <Link to={`/news-details/${id}`} className="text-orange-500 font-semibold cursor-pointer">
  Read More
</Link>

        </p>
      </div>

      {/* Footer */}
      <div className="flex justify-between items-center px-4 pb-4">
        <div className="flex items-center gap-2 text-yellow-500">
          <FaStar />
          <span className="text-sm text-gray-700 font-semibold">
            {rating.number}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-500">
          <FaEye />
          <span className="text-sm font-semibold">{total_view}</span>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
