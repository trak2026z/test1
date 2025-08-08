import React from 'react';

interface ImageCardProps {
  imageUrl: string;
  date: string;
}

export const ImageCard: React.FC<ImageCardProps> = ({ imageUrl, date }) => {
  return (
    <div className="image-card">
      <img src={imageUrl} alt={date} />
      <p>{date}</p>
    </div>
  );
};
