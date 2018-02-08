import React, { Component } from 'react';

import Employee from './models/Employee';

import EmployeeList from './components/EmployeeList';
import EmployeeEditor from './components/EmployeeEditor';

import ResortList from './components/ResortList';
import ResortDetail from './components/ResortDetail';


class App extends Component {
  constructor() {
    super();
    this.state = {
      employees: [ new Employee(0, 'Bernice Ortiz', 4824931093, 'CEO'), new Employee(1, 'Marnie Barnett', 3094812387, 'CTO'), new Employee(2, 'Phillip Weaver', 7459831843, 'Manager'), new Employee(3, 'Teresa Osborne', 3841238745, 'Director of Engineering'), new Employee(4, 'Dollie Berry', 4873459812, 'Front-End Developer'), new Employee(5, 'Harriett Williamson', 6571249801, 'Front-End Developer'), new Employee(6, 'Ruby Estrada', 5740923478, 'Back-End Developer'), new Employee(7, 'Lou White', 8727813498, 'Full-Stack Developer'), new Employee(8, 'Eve Sparks', 8734567810, 'Product Manager'), new Employee(9, 'Lois Brewer', 8749823456, 'Sales Manager') ],
        selectedEmployee: null,
        resorts: [],
        selectedResort: null
      };

      this.selectEmployee = this.selectEmployee.bind( this );
      this.selectResort = this.selectResort.bind( this );
      this.refresh = this.refresh.bind( this );
    }

    componentDidMount() {
      fetch('/resorts')
      .then(res => res.json())
      .then(resorts => this.setState({ resorts }));
    }

    selectEmployee(employee) {
      this.setState({ selectedEmployee: employee });
    }

    selectResort(resort) {
      this.setState({ selectedResort: resort });
    }

    refresh() {
      this.setState(this.state);
    }

    render() {
      return (
        <div id="app">
          <div className="main-container">
            {/* <EmployeeList employees={this.state.employees} selectEmployee={ this.selectEmployee } /> */}
            {/* <EmployeeEditor selected={this.state.selectedEmployee} refreshList={ this.refresh } /> */}
            <ResortList resorts={this.state.resorts} selectResort={ this.selectResort } />
            <ResortDetail selected={this.state.selectedResort} refreshList={ this.refresh } />

        </div>
      </div>
    )
  }
}

export default App;
