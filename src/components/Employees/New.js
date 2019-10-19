import React from 'react'
import EmployeeForm from './Form'
import axios from '../../config/axios'
class NewEmployee extends React.Component {
    constructor(){
        super()
        this.state={employee:{}}
        this.handleEmployeeSubmit=this.handleEmployeeSubmit.bind(this)
    }
    handleEmployeeSubmit(employee){
      axios.post('/employees',employee,{headers:{
          'x-auth':localStorage.getItem('token')
      }})
      .then(response=>{
         // if(response.data.hasOwnProperty('errors')) or
         if(response.data.errors){
            window.alert(response.data.message)
         }
         else{
             this.setState({employee:response.data})
         }
          this.props.history.push('/employees')
      })
    }

    render(){
        return(
            <div>
                <h2>Add Employee</h2>
                <EmployeeForm handleEmployeeSubmit={this.handleEmployeeSubmit}/>
            </div>
        )
    }
}
export default NewEmployee
 
