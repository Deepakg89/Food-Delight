import "bootstrap/dist/css/bootstrap.min.css";
import React from 'react';
import logo from './logo.svg';
import './App.css';

import SearchRestaurant from "./component/SearchRestaurant";
import MainComponent from "./component/MainComponent";
import NavigationBar from "./component/NavigationBar";
import Login from "./component/Login";
import SignIn from "./component/SignIn";
import Dashboard from "./component/Dashboard";

class App extends React.Component {

  // constructor(props) {
  //   super(this.props)
  //   this.state = {
  //     EmptyLogin: true
  //   }
  //   this.showLogin = this.showLogin.bind(this);
  // }

  // showLogin() {
  //   this.setState({
  //     ...this.state,
  //     EmptyLogin: false,
  //     displayLogin: true
  //   })
  // }


  render() {
    return (
      <div className="App" style={{ background: '#E2E2F5' }}>

        {/* <NavigationBar handleLogin={this.showLogin} /> */}
        <NavigationBar />
        <SearchRestaurant />
        <MainComponent restaurantName="Kolachi Restaurant" />
        <MainComponent restaurantName="BBQ Tonight" />
        <MainComponent restaurantName="Al-Habib Restaurant" />
        <MainComponent restaurantName="Al-Sajjad Restaurant" />
        <MainComponent restaurantName="Zaiqa Restaurant" />

        <Login />
        <SignIn />
        <br></br>
        <Dashboard />

        {/* {this.state.EmptyLogin && <NavigationBar handleLogin={this.showLogin} />
          <SearchRestaurant />
          <MainComponent restaurantName="Kolachi Restaurant" />
          <MainComponent restaurantName="BBQ Tonight" />
          <MainComponent restaurantName="Al-Habib Restaurant" />
          <MainComponent restaurantName="Al-Sajjad Restaurant" />
          <MainComponent restaurantName="Zaiqa Restaurant" />}

          {this.state.displayLogin && <NavigationBar>} */}
              
    </div>
    );
      }
    }
    
    export default App;
