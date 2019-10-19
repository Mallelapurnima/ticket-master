import React from 'react'
import axios from '../../config/axios'
import EmployeeItem from './Item'
import {Link} from 'react-router-dom'
import {Table} from 'reactstrap'
class EmployeeList extends React.Component{
    constructor(){
        super()
        this.state={
            employees:[]
        }
        this.handleRemove=this.handleRemove.bind(this)
    }
    handleRemove(id){
        axios.delete(`/employees/${id}`,{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            this.setState(prevState=>{
                return({employees:prevState.employees.filter(employee=>employee._id!==response.data._id)})
            })
        })
    }
    componentDidMount(){
        axios.get('/employees',{
            headers:{
                'x-auth':localStorage.getItem('token') }
        })
        .then(response=>{
           this.setState({employees:response.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
        return(
            <div>
                <h2>Listing Employees-{this.state.employees.length}</h2>
                <Table dark>
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>email</th>
                            <th>mobile</th>
                            <th>actions</th>
                        </tr>
                    </thead>
                    <tbody>
                          {this.state.employees.map((employee,index)=>{
                              return <EmployeeItem key={employee._id} 
                                                    id={employee._id}
                                                    index={index}
                                                    name={employee.name}
                                                    email={employee.email}
                                                    mobile={employee.mobile}
                                                    handleRemove={this.handleRemove}/>
                          })}
                    </tbody>
                
                </Table>
                <Link to='/employees/new'>Add employee</Link>
            </div>
        )
    }
}
export default EmployeeList
