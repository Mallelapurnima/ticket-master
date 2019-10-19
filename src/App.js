
import React from 'react'
import { BrowserRouter, Route, Link,Switch } from 'react-router-dom'
import { connect } from 'react-redux'





import NewCustomer from './components/customers/New'
import CustomerShow from './components/customers/Show'
import CustomerList from './components/customers/List'
import CustomerEdit from './components/customers/Edit'

import DepartmentList from './components/Department/List'

import EmployeesList from './components/Employees/List'
import NewEmployee from './components/Employees/New'
import Ticketnew from './components/Tickets/New'



import RegisterForm from './components/users/RegisterForm'
import LoginForm from './components/users/LoginForm'



function App() {
  return (
    <BrowserRouter>
      <div>
        <h2>Ticket Master</h2>
        <Link to='/'>Home ||</Link>
        <Link to='/customers'> Customers ||</Link>
        <Link to='/Department'>Departments ||</Link>
        <Link to='/Employees'>Employees ||</Link>
        <Link to='/tickets/new'>Tickets ||</Link>


        <Link to="/users/register">register ||</Link>
        <Link to="/users/login">login</Link>
        <Switch>


          <Route path='/customers' component={CustomerList} exact={true} />
          <Route path='/customers/new' component={NewCustomer} />
          <Route path='/customers/edit/:id' component={CustomerEdit} />
          <Route path='/customers/:id' component={CustomerShow} />
          <Route path='/Department' component={DepartmentList} />
          <Route path='/Employees' component={EmployeesList} exact={true} />
          <Route path='/Employees/new' component={NewEmployee} />
          <Route path="/Tickets/New" component={Ticketnew} />
          <Route path="/users/register" component={RegisterForm} exact={true}/>
          <Route path="/users/login" component={LoginForm} exact={true} />
           </Switch>
        
        





        
      </div>
    </BrowserRouter>
  )
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App)