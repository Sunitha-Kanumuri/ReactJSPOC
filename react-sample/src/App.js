import React, { Component } from 'react';
import './App.css';
import LeftNavigation from './leftNavigation';
import Users from './users/users';
import Albums from './albums/albums';

class App extends Component {
  state = { active: 'Users' };
  notify = active => {
    this.setState({ active });
  };

  render() {
    return (
      <div className="app">
        <header className="header">
          <span className="title">React Component</span>
        </header>
        <div className="container">
          <div className="leftNavigation">
            <LeftNavigation notify={this.notify} active={this.state.active}/>
          </div>
          <div className="content">
            {this.state.active === 'Users' && <Users/>}
            {this.state.active === 'Albums' && <Albums/>}
            {this.state.active === 'Gallery' && <p>Gallery</p>}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
