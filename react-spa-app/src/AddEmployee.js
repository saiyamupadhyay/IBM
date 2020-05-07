import React, { Component } from 'react';
class AddEmployee extends Component {
    constructor(props) {
        super(props);
        this.state = { employees: null, showAddButton: false };
    }
    componentWillMount() {
        fetch('http://localhost:8000/api/employee')
            .then(res => res.json())
            .then(result => {
                console.log(result)
                this.setState({ employees: result })
            })
            this.setState({showAddButton:this.props.display})
            console.log(this.state.showAddButton)
            
    }
    handleNameChange(event) {
        console.log("change event fired");
        console.log(event.target.value);
        this.setState({ name: event.target.value })
    }
    handleSalaryChange(event) {
        console.log("change event fired");
        console.log(event.target.value);
        this.setState({ salary: event.target.value })
    }
    handleSubmit(event) {

        console.log('A name was submitted: ' + this.state.name, this.state.salary);
        fetch('http://localhost:8000/api/employee', {

            method: 'POST', // *GET, POST, PUT, DELETE, etc. 
            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ name: this.state.name, salary: this.state.salary }) // body data type must match "Content-Type" header
        })
            .then(res => {
                console.log(res);
                this.setState({ message: 'Employee added successfully!!' })
            })

        event.preventDefault();
        this.state.showAddButton=false;
    }
    handleDelete(item) {
        console.log("delete triggred");
        console.log(item.id);
        fetch('http://localhost:8000/api/employee/' + item.id, {

            method: 'DELETE', // *GET, POST, PUT, DELETE, etc. 
            headers: {

                'Content-Type': 'application/json'
            },
        })
            .then(res => {
                console.log(res);
                this.setState({ message: 'Employee deleted successfully!!' })
            })
    }
    handleUpdate(item) {
        console.log("update fired");
        console.log(item.id);
        fetch('http://localhost:8000/api/employee', {

            method: 'PUT', // *GET, POST, PUT, DELETE, etc. 
            headers: {

                'Content-Type': 'application/json'
            },

            body: JSON.stringify({ id: item.id, name: this.state.name, salary: this.state.salary }) // body data type must match "Content-Type" header
        })
            .then(res => {
                console.log(res);
                this.setState({ message: 'Employee Updated successfully!!' })
            })
            .catch(
                err => console.log(err)
            )

    }

    render() {
        if (!this.state.employees)
            return null;
        var employeeList = this.state.employees.map((employee, i) => {
            return (
                <li key={i}>
                    {employee.name}--{employee.salary}
                </li>
            )
        })
        const renderAddButton=()=>{
            if(this.state.showAddButton){
                return(
                    <input type="button"  onClick={this.handleSubmit.bind(this)}
                    value="Add Employee" />
                )
            }
        }
        return (
            <div>
                <form>
                    <label>
                        Name:
                   <input type="text" onChange={this.handleNameChange.bind(this)}
                            value={this.state.name} />
                    </label>
                    <label>
                        Salary:
                <input type="number" onChange={this.handleSalaryChange.bind(this)}
                            value={this.state.salary} />
                    </label>
                        {/* {this.state.showButton ? <input type="button"  onClick={this.handleSubmit.bind(this)}
                            value="Add Employee" /> : <button></button>} */}
                            {renderAddButton()}
                </form>
                <ul>
                    {employeeList}

                </ul>
            </div>
        );
    }
}

export default AddEmployee;