import React, { Component } from 'react';

export class SkiDayCount extends Component {
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-day">
          <span>5 days</span>
        </div>
        <div className="powder-days">
          <span>2 days</span>
        </div>
        <div className="backcountry-days">
          <span>1 hiking day</span>
        </div>
      </div>
    );
  }
}



