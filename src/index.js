import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux'
import configureStore from '../src/store/configureStore'
import axios from 'axios'
import {setUser} from '../src/actions/user'
const store=configureStore()

console.log(store.getState())


store.subscribe(()=>{
    console.log(store.getState())
})
if(localStorage.getItem('authToken')){
    axios.get('/users/account',{
      headers:{
        'x-auth':localStorage.getItem('authToken')
      }
    })
    .then(response=>{
      const user=response.data
      store.dispatch(setUser(user))
    })
  }
const ele=(
    <Provider store={store}>
        <App />
    </Provider>
)
    

ReactDOM.render(ele,document.getElementById('root'))