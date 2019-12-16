import React, { Component } from 'react';
import Logo from '../../components/Logo';
import './HomePage.css';

class HomePage extends Component {
  render() {
    return (
      <div>
        <section id="home" class="home-section">
          <div class="content">
            <header>
              <h1 class="home-title">r.SIMON</h1>
            </header>
            <div class="home-logo">
              <Logo />
            </div>
          </div>
        </section>
      </div>
    )
  }
}

export default HomePage;
