import React from 'react'
import CustomerForm from './Form';
import axios from '../../config/axios';
export default class CustomerEdit extends React.Component{
    constructor(){
        console.log('edit constructor')
        super()
        this.state={
            customer:{}
        }
    }
    handleCustomerSubmit=(customer)=>{
        axios.put(`/customers/${customer.id}`,customer,{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            console.log(response.data)
        })
        this.props.history.push('/customers')
    }
    componentDidMount(){
        console.log('edit did mount')
        const id=this.props.match.params.id
        axios.get(`/customers/${id}`,{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            this.setState({customer:response.data})
        })
        
    }
    render(){
        console.log('edit render')
        return(
            <div>
                <h2>Edit customer</h2>
            <CustomerForm customer={this.state.customer} handleCustomerSubmit={this.handleCustomerSubmit}/>
            </div>
        )
    }
}
