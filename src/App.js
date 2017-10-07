import React, { Component } from 'react';
import './App.css';
import  { SkiDayList }  from './components/SkiDayList';

class App extends Component {
  render() {
    return (
    <SkiDayList days={
    	[
    		{
    			resort: "Squaw Valley",
    			date: new Date("1/2/2016"),
    			powder: true,
    			backcountry: false
    		},
    		{
    			resort: "Kirkwood",
    			date: new Date("3/28/2016"),
    			powder: false,
    			backcountry: false
    		},
    		{
    			resort: "Mt. Tallac",
    			date: new Date("4/2/2016"),
    			powder: false,
    			backcountry: true
    		}



    	]
    }/>
    );				
  }
}

export default App;
