import React, { Component } from 'react';
class ShowEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: null }
    }
    componentWillMount() {
        fetch('http://localhost:8000/api/employee')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({ employees: result })
            })
    }

    render() {
        if(!this.state.employees)
            return null;
        var employeeList = this.state.employees.map((employee,i)=>{
            return(
                <li key={i}>
                    {employee.name}--{employee.salary}
                </li>
            )
        }) 
        return (
            <div>
                <ul>
                    {employeeList}
                </ul>
            </div>
        );
    }
}

export default ShowEmployee;