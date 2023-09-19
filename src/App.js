import React, { lazy } from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';

// Import the `startTransition` function from React
import { startTransition } from 'react';

const Home = lazy(() => import('./pages/Home'));
const GalleryPage = lazy(() => import('./pages/GalleryPage'));

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Home
                // Pass the `startTransition` function as a prop to the component
                startTransition={startTransition}
              />
            }
          />
          <Route
            path="/gallery"
            element={
              <GalleryPage
                // Pass the `startTransition` function as a prop to the component
                startTransition={startTransition}
              />
            }
          />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
