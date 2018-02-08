import React, { Component } from 'react';

class ResortList extends Component {
  render() {
    return (
      <div>
        <ul className="listContainer">
          {
            this.props.resorts.map((resort) => {
              return (
                <li className="listText" key={resort.id} onClick={ () => { this.props.selectResort(resort) }}> { resort.name } </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}

export default ResortList;
