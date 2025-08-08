import React, { useEffect, useState } from 'react';
import { fetchTodayImages } from '../services/epicApi';

export const ImageGallery: React.FC> = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchTodayImages()
      .then(setData)
      .catch(console.error);
  }, []);

  return (
    <div>
      <p>Result: {JSON.stringify(data, null, 2)}</p>
    </div>
  );
};
