import React from 'react'
class CustomerForm extends React.Component{
      constructor(props){
          console.log('form constructor')
          super(props)
          this.state={
            //  name:props.customer ?props.customer.name:'',
             // email:props.customer ?props.customer.email:'',
             // mobile:props.customer ?props.customer.mobile:''
             name:'',
             email:'',
             mobile:''
             
          }
          this.handleChange=this.handleChange.bind(this)
          this.handleSubmit=this.handleSubmit.bind(this)
      }
      handleChange(e){
          this.setState({[e.target.name]:e.target.value})
      }
      componentWillReceiveProps(nextProps){
         const {email,name,mobile}=nextProps.customer
         this.setState({name,email,mobile})
      }
      
     
      
      handleSubmit(e){
          e.preventDefault()
          const formData={
              name:this.state.name,
              email:this.state.email,
              mobile:this.state.mobile
          }
        this.props.customer&&(formData.id=this.props.customer._id)
          this.props.handleCustomerSubmit(formData)
      }
      render(){
         console.log('form render')
          return(
               <div>
                  <form onSubmit={this.handleSubmit}>
                      Name:<input type='text' value={this.state.name} onChange={this.handleChange} name="name"/><br/>
                      email:<input type='text' value={this.state.email} onChange={this.handleChange} name="email"/><br/>
                      mobile:<input type='text' value={this.state.mobile} onChange={this.handleChange} name="mobile"/><br/>
                      <input type='submit'className="btn btn-primary"/>
                  </form>
              </div>
          )
      }
}
export default CustomerForm



