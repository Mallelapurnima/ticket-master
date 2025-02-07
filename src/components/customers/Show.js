import React from 'react'
import {Link} from 'react-router-dom'
import axios from '../../config/axios';
export default class CustomerShow extends React.Component{
    constructor(){
        super()
        this.state={
            customer:{}
        }
    }
    componentDidMount(){
        const id=this.props.match.params.id
        axios.get(`/customers/${id}`,{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            this.setState({customer:response.data})
        })
        .catch(err=>{
            console.log(err)
        })
    }
   render(){
       return(
           <div>
               <h2>{this.state.customer.name}-{this.state.customer.email}</h2>
               <Link to={`/customers/edit/${this.state.customer._id}`}>edit</Link>
               
           </div>
 
       )
   }
}
