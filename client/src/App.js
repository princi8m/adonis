import React, { Component } from 'react'
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SignUp from './components/pages/SignUp';
import Login from './components/pages/Login';
import Footer from './components/Footer';


export default class App extends Component {

  state={
    user: this.props.user
  }

  setUser = user => {
    this.setState({
      user: user
    })
  }

  render() {
    return (
      <div>
         <Navbar />
       <Switch>
           <Route 
           exact path='/' 
           render={props => <Home  />}
           />
           
           <Route exact path='/workout-plan' render={props => <Services  />} />
           <Route exact path='/products' render={props => <Products  />} />
           <Route
            exact path='/signup'
            render={props => <SignUp setUser={this.setUser} {...props} />}
          />
          <Route
            exact path='/login'
            render={props => <Login setUser={this.setUser} />}
          />

         </Switch>
      </div>
    )
  }
}
