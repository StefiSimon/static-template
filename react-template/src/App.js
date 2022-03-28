import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import HomePage from './pages/HomePage/HomePage';
import CausalityPage from './pages/GalleryPage/Causality/CausalityPage';
import MotAMotPage from './pages/GalleryPage/MotAMot/MotAMotPage';
import TataracesPage from './pages/GalleryPage/Tataraces/TataracesPage';

const url = window.location.origin;

const menuColors = {
  WHITE: 'white',
  BLACK: 'black',
  GREY: 'grey'
};

class App extends Component {
  state = {
    isMenuOpen: false,
    isMenuWithBackground: false,
    menuColor: menuColors.WHITE
  };

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  };

  setMenuColor = (menuColor) => {
    this.setState({
      menuColor
    })
  };

  handleScroll = () => {
    const pageScrollHeight = window.pageYOffset;
    this.setState({
      isMenuWithBackground: pageScrollHeight > 200
    });

    const path = window.location.pathname;

    if (path !== '/causality' && path !== '/motamot' && path !== '/tataraces') {
      const heightDiff = window.scrollY / window.innerHeight;
      switch (true) {
        case heightDiff > 0 && heightDiff <= 1:
          this.setMenuColor(menuColors.WHITE);
          break;
        case heightDiff > 1 && heightDiff <= 4:
          this.setMenuColor(menuColors.BLACK);
          break;
        case heightDiff > 4 && heightDiff <= 6.5:
          this.setMenuColor(menuColors.WHITE);
          break;
        case heightDiff > 6.5 && heightDiff <= 10:
          this.setMenuColor(menuColors.BLACK);
          break;
        default:
          this.setMenuColor(menuColors.WHITE);
      }
    } else if (path === '/causality') {
      this.setMenuColor(menuColors.BLACK);
    } else if (path === '/motamot') {
      this.setMenuColor(menuColors.WHITE);
    } else {
      this.setMenuColor(menuColors.GREY);
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
    const { isMenuOpen, isMenuWithBackground, menuColor } = this.state;
    return (
      <div>
        <BrowserRouter>
          <div className={`${isMenuWithBackground && !isMenuOpen ? 'header-background' : 'header-transparent'} header-overlay`} />
          <header className={`header-mobile ${menuColor}`}>
            <Menu isOpen={isMenuOpen} onStateChange={({ isOpen }) => this.setIsMenuOpen(isOpen)}>
              <a className="menu-item" href="/" onClick={this.onMenuItemSelect}>home</a>
              <a className="menu-item" href="/#about" onClick={this.onMenuItemSelect}>about</a>
              <a className="menu-item" href="/#collections" onClick={this.onMenuItemSelect}>artworks</a>
              <a className="menu-item" href="/#contact" onClick={this.onMenuItemSelect}>contact</a>
            </Menu>
          </header>

          <header className={`${isMenuWithBackground ? 'header-background' : 'header-transparent'} header-desktop`}>
            <nav>
              <ul className={`${menuColor}-text`}>
                <li><a href={`${url}/#landing`}>home</a></li>
                <li><a href={`${url}/#about`}>about</a></li>
                <li><a href={`${url}/#collections`}>artworks</a></li>
                <li><a href={`${url}/#contact`}>contact</a></li>
              </ul>
              <div className="vertical-divider"></div>
            </nav>
          </header>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/causality" component={CausalityPage} />
          <Route exact path="/motamot" component={MotAMotPage} />
          <Route exact path="/tataraces" component={TataracesPage} />
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
