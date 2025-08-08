import React from 'react';
import { ImageGallery } from './components/ImageGallery';

const App: React.FC = () => {
  return (
    <div className="app">
      <h1>NASA EPIC Images</h1>
      <ImageGallery />
    </div>
  );
};

export default App;
