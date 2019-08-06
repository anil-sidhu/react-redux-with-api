import React, { Component } from 'react';
import Login from './Containers/LoginContainer'
class App extends Component {
  render() { 
    // when you login from this component will re-render due to redux flow
    console.warn("app ..",this.props)   
    return ( 
        <div >
          <Login />
        </div>
    );
  } 
}
export default App; 
