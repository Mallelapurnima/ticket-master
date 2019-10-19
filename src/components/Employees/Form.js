import React from 'react'
import axios from '../../config/axios'
class EmployeeForm extends React.Component{
      constructor(){
          super()
          this.state={
              name:'',
              email:'',
              mobile:'',
              department:'',
              departments:[]
          }
          this.handleChange=this.handleChange.bind(this)
          this.handleSubmit=this.handleSubmit.bind(this)
        }
        componentDidMount(){
            axios.get('/departments',{headers:{
                'x-auth':localStorage.getItem('token')
            }})
            .then(response=>{
                this.setState({departments:response.data})
            })
        }
        handleChange(e){
            this.setState({[e.target.name]:e.target.value})
        }
        handleSubmit(e){
            e.preventDefault()
            const formData={
                name:this.state.name,
                email:this.state.email,
                mobile:this.state.mobile,
                department:this.state.department
            }
           
            this.props.handleEmployeeSubmit(formData)
        }
        render(){
            return(
                <div>
                    <form onSubmit={this.handleSubmit}>
                        Name:<input type='text' value={this.state.name} onChange={this.handleChange} name="name"/><br/>
                        email:<input type='text' value={this.state.email} onChange={this.handleChange} name="email"/><br/>
                        mobile:<input type='text' value={this.state.mobile} onChange={this.handleChange} name="mobile"/><br/>
                        Department
                        <select value={this.state.department} onChange={this.handleChange} name="department">
                            <option value=''>select</option>
                            {this.state.departments.map(dept=>{
                                return <option key={dept._id} value={dept._id}>{dept.name}</option>
                            })}
                        </select>
                        <input type='submit' className="btn btn-primary"/>
                    </form>
                    </div>
          )
      }
}
export default EmployeeForm
    