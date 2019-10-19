import React from 'react'
import axios from "../../config/axios"
class RegisterForm extends React.Component{
    constructor(){
        super()
        this.state={
            username:'',
            email:'',
            password:''
        }
        this.handleChange=this.handleChange.bind(this)
        this.handleSubmit=this.handleSubmit.bind(this)
    }
    handleSubmit(e){
        e.preventDefault()
        const formData={
            username:this.state.username,
            email:this.state.email,
            password:this.state.password
        }
        
        axios.post("/users/register", formData)
        .then( (response) => {
            console.log(response.data)
            this.setState( ()=> ({
                username:'',email:'',password:'', 
                //once if we are loged in. we have to make input feilds empty and redirect user to login screen
                notice:"successfully registered,taking you to login screen"
            }))

            setTimeout(()=>{
                this.props.history.push('/users/login')
            },2000)
        })
        .catch(err => console.log(err))
    }
    handleChange(e){
        this.setState({
            [e.target.name]:e.target.value
        })
    }

  


    
    render(){
        return(
            <div>
                <h2>register form</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>userName
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/></label><br/>
                    <label>email
                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/></label><br/>
                    <label >password
                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/></label><br/>
                    <input type="submit"className="btn btn-primary" />
                    </form> 
            </div>
        )
    }

}
export default RegisterForm
    

        
    
