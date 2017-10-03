import React, { Component } from 'react';
import './App.css';
import  { SkiDayCount }  from './components/SkiDayCount';

class App extends Component {
  render() {
    return (
    <SkiDayCount total={50}
    			 powder={20}
    			 backcountry={10}
    			 goal={100}/>
    );				
  }
}

export default App;
