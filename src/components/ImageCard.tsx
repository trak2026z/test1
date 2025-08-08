import React from "react";

type ImageCardProps = {
  imageUrl: string;
  date: string;
};

export const ImageCard: React.FC = ({ imageUrl, date }) => {
  return (
    <div className="image-card">
      <img src={imageUrl } alt={`data: ${date}`} />
      <p >{date}</p>
    </div>
  );
};
