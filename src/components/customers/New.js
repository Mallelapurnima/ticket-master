import React from 'react'
import axios from '../../config/axios'
import CustomerForm from './Form'
class NewCustomer extends React.Component{
    constructor(){
        super()
        this.handleCustomerSubmit=this.handleCustomerSubmit.bind(this)
    }
    handleCustomerSubmit(customer){
      axios.post('/customers',customer,{headers:{
          'x-auth':localStorage.getItem('token')
      }})
      .then(response=>{
         // if(response.data.hasOwnProperty('errors')) or
         if(response.data.errors){
            window.alert(response.data.message)
         }
         else{
             this.props.history.push(`/customers`)
 
         }
      })
    }
 
    render(){
        return(
            <div>
                <h2>Add Customer</h2>
                <CustomerForm handleCustomerSubmit={this.handleCustomerSubmit}/>
            </div>
        )
    }
}
export default NewCustomer
