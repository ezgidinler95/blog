
import React, { Component } from "react";
import { connect } from 'react-redux';
import { SITE_URL } from './config/config';
import Blog from './components/Blog/Index/index';
import Panel from './components/Panel/Index/index';
import Login from './components/Panel/Login/index';
import { Route } from 'react-router-dom';
import "./style.css";

class App extends Component {
  async UNSAFE_componentWillMount() {

  };
  render() {
    if (window.location.href === (SITE_URL + "/login")) {
      return <Route component={Login}></Route>;
    }
    return (
      <div className="App" >
        <Route exact path="/" component={Blog} />
        <Route exact path="/panel" component={Panel} />
        <Route exact path="/panel/genelBilgi" component={Panel} />
      </div >
    );
  }
}

const mapStateToProps = ({ }) => {
  return {

  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)((App));