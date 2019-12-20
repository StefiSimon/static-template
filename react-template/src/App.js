import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';

function App() {
  return (
    <div>
      <BrowserRouter>
        <header className="header-desktop">
          <nav>
            <ul>
              <li><a href="#landing">home</a></li>
              <li><a href="#about">about</a></li>
              <li><a href="#collections">collections</a></li>
              <li><a href="#artworks">artworks</a></li>
              <li><a href="#contact">contact</a></li>
            </ul>
          </nav>
        </header>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/gallery" component={GalleryPage} />
      </BrowserRouter>
    </div>
  );
}

export default App;
