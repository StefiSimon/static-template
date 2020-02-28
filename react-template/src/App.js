import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import HomePage from './pages/HomePage/HomePage';
import GalleryPage from './pages/GalleryPage/GalleryPage';
import { getURL } from './utils/url';

const url = getURL();

class App extends Component {
  state = {
    isMenuOpen: false,
    isMenuWithBackground: false,
    isMenuWhite: true
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  setMenuWhite = (value) => {
    this.setState({
      isMenuWhite: value
    })
  };

  handleScroll = () => {
    const pageScrollHeight = window.pageYOffset;
    this.setState({
      isMenuWithBackground: pageScrollHeight > 200
    });

    if (window.location.pathname !== '/gallery') {
    const heightDiff = window.scrollY / window.innerHeight;
      switch(true) {
        case heightDiff > 0 && heightDiff < 1: 
          this.setMenuWhite(true);
          break;
        case heightDiff > 1 && heightDiff < 2.77:
          this.setMenuWhite(false);
          break;
        case heightDiff > 2.77 && heightDiff < 3.91:
          this.setMenuWhite(true);
          break;
        case heightDiff > 3.91 && heightDiff < 4.55:
          this.setMenuWhite(false);
          break;
        default:
          this.setMenuWhite(true);
      }
    } else {
      this.setMenuWhite(false);
    }
  };

  setIsMenuOpen = (value) => {
    this.setState({
      isMenuOpen: value
    })
  };
  onMenuItemSelect = () => {
    this.setIsMenuOpen(false);
  };
  render() {
    const { isMenuOpen, isMenuWithBackground, isMenuWhite } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div className={`${isMenuWithBackground && !isMenuOpen ? 'header-background' : 'header-transparent'} header-overlay`} />
          <header className="header-mobile">
            <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => this.setIsMenuOpen(isOpen)}>
              <a className="menu-item" href="/" onClick={this.onMenuItemSelect}>home</a>
              <a className="menu-item" href="/#about" onClick={this.onMenuItemSelect}>about</a>
              <a className="menu-item" href="/#collections" onClick={this.onMenuItemSelect}>collections</a>
              <a className="menu-item" href="/#artworks" onClick={this.onMenuItemSelect}>artworks</a>
              <a className="menu-item" href="/#contact" onClick={this.onMenuItemSelect}>contact</a>
            </Menu>
          </header>
          
          <header className={`${isMenuWithBackground ? 'header-background' : 'header-transparent'} header-desktop`}>
            <nav>
              <ul className={isMenuWhite ? 'white-text' : 'black-text'}>
                <li><a href={`${url}/#landing`}>home</a></li>
                <li><a href={`${url}/#about`}>about</a></li>
                <li><a href={`${url}/#collections`}>collections</a></li>
                <li><a href={`${url}/#artworks`}>artworks</a></li>
                <li><a href={`${url}/#contact`}>contact</a></li>
              </ul>
              <div className="vertical-divider"></div>
            </nav>
          </header>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/gallery" component={GalleryPage} />
        </BrowserRouter>
      </div>
    );
  }
} 

export default App;
