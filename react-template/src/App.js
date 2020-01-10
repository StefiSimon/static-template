import React from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import { getURL } from './utils/url';

function App() {
  const url = getURL();
  return (
    <div>
      <BrowserRouter>
        <header className="header-desktop">
          <nav>
            <ul>
              <li><a href={`${url}/#landing`}>home</a></li>
              <li><a href={`${url}/#about`}>about</a></li>
              <li><a href={`${url}/#collections`}>collections</a></li>
              <li><a href={`${url}/#artworks`}>artworks</a></li>
              <li><a href={`${url}/#contact`}>contact</a></li>
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
