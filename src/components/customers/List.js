import React from 'react'
import axios from '../../config/axios'
import CustomerItem from './Item'
import {Link} from 'react-router-dom'
import {Table} from 'reactstrap'
class CustomerList extends React.Component{
    constructor(){
        super()
        this.state={
            customers:[]
        }
        this.handleRemove=this.handleRemove.bind(this)
    }
    handleRemove(id){
        axios.delete(`/customers/${id}`,{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            this.setState(prevState=>{
                return({customers:prevState.customers.filter(customer=>customer._id!==response.data._id)})
            })
        })
    }
    componentDidMount(){
        axios.get('/customers',{
            headers:{
                'x-auth':localStorage.getItem('token') }
        })
        .then(response=>{
           this.setState({customers:response.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
    render()
    {
        return(
            <div>
                <h2>Listing customers-{this.state.customers.length}</h2>
                <Table striped>
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
                          {this.state.customers.map((customer,index)=>{
                              return <CustomerItem key={customer._id} 
                                                    id={customer._id}
                                                    index={index}
                                                    name={customer.name}
                                                    email={customer.email}
                                                    mobile={customer.mobile}
                                                    handleRemove={this.handleRemove}/>
                          })}
                    </tbody>
                
                </Table>
                <Link to='/customers/new'>Add Customer</Link>
            </div>
        )
    }
}
export default CustomerList
