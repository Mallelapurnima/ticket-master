import React from 'react'
 export default class DepartmentForm extends React.Component{
  constructor(){
      super()
      this.state={
          name:''
        }
      this.handleChange=this.handleChange.bind(this)
      this.handleSubmit=this.handleSubmit.bind(this)
  }
  handleChange(e){
      const name=e.target.value
      this.setState({name})
  }
  handleSubmit(e){
      e.preventDefault()
      const formData={name:this.state.name}
      this.props.handleFormSubmit(formData)
      this.setState({name:''})
  }
  render(){
      return(
          <div>
              <form onSubmit={this.handleSubmit}>
                  <input type='text' value={this.state.name} onChange={this.handleChange} />
                  <input type='submit' value='add' className="btn btn-primary"/>
              </form>
          </div>
      )
  }
}
