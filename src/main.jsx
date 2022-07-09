import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';
import Overlay from './layout/Overlay';
import Sneakers from './Sneakers';
import { Suspense } from 'react';

function App() {
  return (
    <>
      <Suspense fallback={null}>
        <Sneakers />
      </Suspense>
      <Overlay />
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
