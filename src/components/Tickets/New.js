import React from 'react'
import axios from '../../config/axios'
//import Select from 'react-select'

class Ticketnew extends React.Component {
    constructor() {
        super()
        this.state = {
            customers: [],
            customer: '',
            departments: [],
            message: '',
            priority: '',
            employees: [],
            employee: [],
            employeesnew: [],
            option: ''
        }
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }


    handleSelect = (props => {
        this.setState({ [props.name]: props.value })
        if (props.name ==="option") {
            this.setState(prev => {
                return {
                    employeesnew: prev.employees.filter(employee => employee.dept._id === prev.option)
                }
            })


        }
        else if (Array.isArray(props) ===true) {
            console.log(props)
            this.setState({ employee: props })

        }

        console.log(this.state)

    })

    handleSubmit = (e) => {
        e.preventDefault()
        const ticket = {
            customer: this.state.customer,
            department: this.state.option,
            employees: this.state.employee,
            priority: this.state.priority,
            message: this.state.message,
            code: "200"
        }
        axios.post('/tickets', ticket, {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                if (response.data._id) {
                    console.log("done")
                    this.setState({
                        customers: [],
                        customer: '',
                        departments: [],
                        message: '',
                        priority: '',
                        employees: [],
                        employee: [],
                        employeesnew: [],
                        option: ''
                    })

                }
            })

    }
    componentDidMount() {
        axios.get('/departments/', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const array = []
                response.data.forEach(item => {
                    array.push(item)
                })
                this.setState({ departments: array })
                console.log(this.state.departments)
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('/customers/', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const array = []
                const data=response.data
                data.forEach(item => {
                    array.push(item)
                })
                
                this.setState({ customers: array })
            })
            .catch(err => {
                console.log(err)
            })
        axios.get('/employees/', {
            headers: {
                'x-auth': localStorage.getItem('token')
            }
        })
            .then(response => {
                const array = []
                response.data.forEach(item => {
                    array.push(item)
                })
                this.setState({ employees: array })

            })
            .catch(err => {
                console.log(err)
            })
    }


    render() {
        return (
            <div>
                <h3>Add Customer</h3>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        customer
                        {/* <Select className="select" name="customer" options={this.state.customers} onChange={this.handleSelect} /> */}
                        <select onChange={this.handleSelect}>
                    <option value=''> select </option>
                    {
                        this.state.customers.map(customer => {
                            return (
                                <option key={customer._id} value={customer._id}>{customer.name}</option>
                            )
                        })
                    }
                </select>
                    </label><br />
                    <label> department
                    <select onChange={this.handleChange}>
                    <option value=''> select </option>
                    {
                        this.state.departments.map(department => {
                            return (
                                <option key={department._id} value={department._id}>{department.name}</option>
                            )
                        })
                    }
                </select>
                </label><br />
                
                    
                    
                
                    <label>
                        employee
                        {/* <Select className="select" name="customer" options={this.state.customers} onChange={this.handleSelect} /> */}
                        <select onChange={this.handleChange}>
                    <option value=''> select </option>
                    {
                        this.state.employees.map(employee => {
                            return (
                                <option key={employee._id} value={employee._id}>{employee.name}</option>
                            )
                        })
                    }
                </select>
                    </label><br />
                    <label>
                        message
                        <textarea name="message" value={this.state.message} onChange={this.handleChange} /><br /><br required />
                        high
                        <input type="radio" value="high" name="priority" onChange={this.handleChange} />
                        low
                        <input type="radio" value="low" name="priority" onChange={this.handleChange} />
                        medium
                        <input type="radio" value="medium" name="priority" onChange={this.handleChange} /><br />
                        <input type="submit" className="btn btn-primary"/>
                    </label>


                </form>
            </div>
        )
    }
}

export default Ticketnew


