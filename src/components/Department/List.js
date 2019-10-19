import React from 'react'
import axios from '../../config/axios'
import DepartmentForm from './Form'
class DepartmentList extends React.Component{
    constructor(){
        super()
        this.state={
            depts:[]
        }
        this.handleFormSubmit=this.handleFormSubmit.bind(this)
    }
    componentDidMount(){
    axios.get('/departments',{headers:{
        'x-auth':localStorage.getItem('token')
    }})
    .then(response=>{
        this.setState({depts:response.data})
    })
    .catch(err=>{
        console.log(err)
    })
    }
    handleFormSubmit(name){
        axios.post('/departments',name,{headers:{
            'x-auth':localStorage.getItem('token')
        }})
        .then(response=>{
            if(response.data.errors){
                window.alert(response.data.message)
            }
            else{
          this.setState(prevState=>{
              return({
                 // depts:prevState.depts.concat(response.data) will not use because it is not pure function
                //es5 depts:[].concat(prevState.depts,response.data)
                depts:[...prevState.depts,response.data]//es6
                })
          })
        }
        })
 
    }
    handleRemove=(id)=>{
    axios.delete(`/departments/${id}`,{headers:{
        'x-auth':localStorage.getItem('token')
    }})
    .then(response=>{
        
        this.setState(prevState=>({
            depts:prevState.depts.filter(dept=>dept._id!==response.data._id)
        }))
    
    })
    }
  render(){
      return(
          <div>
              <h2>Listing Departments-{this.state.depts.length}</h2>
              <ul>
                  {this.state.depts.map(dept=>{
                      return <li key={dept._id}>{dept.name}<button className="btn btn-danger" onClick={()=>{
                             this.handleRemove(dept._id)
                      }}>remove </button></li>
                  })}
              </ul>
              <DepartmentForm handleFormSubmit={this.handleFormSubmit}/>
              </div>
      )
  }
}
export default DepartmentList
