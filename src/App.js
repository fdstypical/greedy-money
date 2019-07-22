import React from 'react';
import './App.css';
import Header from './header'
import Main from './main'

class App extends React.Component{

  render(){
    return(
      <div>
        <Header/>
        <Main/>
      </div>
    )
  }
}

export default App;