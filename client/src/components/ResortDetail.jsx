import React, { Component } from 'react';

class ResortDetail extends Component {
  constructor() {
    super();
    this.state = {
      resort: null,
      originalResort: null,
      notModified: true
    };
  }

  componentWillReceiveProps(props) {
    this.setState({ resort: Object.assign({}, props.selected), originalResort: props.selected, notModified: true });
  }

  render() {
    return (
      <div className="infoCard">
        {
          this.state.resort !== null
            ?
              <div>
                <span id="employeeID"> ID: { this.state.resort.id } </span>
                <p id="employeeTitle"> { this.state.resort.name } </p>
                <img src={ this.state.resort.map } alt="Map" height="200" width="200"/>
                <br />
                <p className="placeholderText">Trail Count: { this.state.resort.totalTrails }</p>
                <p className="placeholderText">Total Trail Miles: { this.state.resort.totalMiles }</p>
                <p className="placeholderText">Average Trail Difficulty: { this.state.resort.averageDifficulty }</p>
              </div>
            :
            <p id="noEmployee"> No Resort Selected </p>
        }
      </div>
    )
  }
}

export default ResortDetail;
