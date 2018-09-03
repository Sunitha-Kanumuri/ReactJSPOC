import React, { Component } from "react";
import "./App.css";
import Users from "./users/users";
import Albums from "./albums/albums";
import LeftNavigation from "./nav";
import Posts from "./users/posts/posts";
import ToDos from "./users/todos/todos";
import NewUser from "./users/newuser";
import { BrowserRouter } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
// import MyStackRouter from "./Router";

class App extends Component {
  constructor(props) {
    super();
    this.state = { active: "Users" };
  }

  notify = active => {
    this.setState({ active });
  };

  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <header className="header">
            <span className="title">React component interaction</span>
          </header>
          <div className="container">
            <div className="leftNavigation">
              <LeftNavigation notify={this.notify} active={this.state.active} />
            </div>
            <div className="content">
              <Switch>
                <Route exact path="/Users" component={Users} />
                <Route path="/Albums" component={Albums} />
                <Route path="/NewUser" component={NewUser} />
                <Route path="/Posts" component={Posts} />
                <Route path="/ToDos" component={ToDos} />
              </Switch>
            </div>
          </div>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
