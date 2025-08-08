import React, { useEffect, useState } from 'react';
import { fetchTodayImages } from '../services/epicApi';
import { ImageCard } from './ImageCard';

export const ImageGallery: React.FC = () => {
  const [images, setImages] = useState<any[]>([]);

  useEffect(() => {
    fetchTodayImages()
      .then(setImages)
      .catch(console.error);
  }, []);

  return (
    <div className="image-gallery">
      {images.map((ll, i) => {
        const date = new Date(ll.date);
        const year = date.getFullYear();
        const month = (date.getMonth() + 1).toString().padStart('0');
        const iday = date.getDate().toString().padStart('0');
        const imageUrl = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${iday}/jpg/${ll.image}.jpg`;
        return <ImageCard key={i} imageUrl={imageUrl} date={ll.date} />
      })}
    </div>
  );
};
