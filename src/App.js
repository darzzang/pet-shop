import React from 'react';
import ThumbnailComponent from './components/ThumbnailComponent';

function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">
          Figma to React Component
        </h1>
        <div className="bg-white rounded-lg shadow-lg p-8">
          <ThumbnailComponent />
        </div>
      </div>
    </div>
  );
}

export default App; 