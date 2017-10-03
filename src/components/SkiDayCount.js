import React, { Component } from 'react';

export class SkiDayCount extends Component {
  render() {
    return (
      <div className="ski-day-count">
        <div className="total-day">
          <span>{this.props.total}</span>
          <span> days</span>
        </div>
        <div className="powder-days">
          <span>{this.props.powder}</span>
          <span> days</span>
        </div>
        <div className="backcountry-days">
          <span>{this.props.backcountry}</span>
          <span> hiking day</span>
        </div>
        <div>
          <span>{this.props.goal}</span>
        </div>
      </div>
    );
  }
}



