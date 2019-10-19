import axios from "../config/axios"

export const setUser=(user) => {
    return{
        type:'SET_USER',
        payload:user
    }
}
export const startSetUser=(formData)=>{
    // console.log(formData,"formdata")
    return(dispatch)=> {
        axios.post('/users/login',formData)
        .then(response=>{
            console.log(response.data, "data")
            if(response.data.hasOwnProperty('error')){
                alert(response.data.errors)
            }else {
                localStorage.setItem('token', response.data.user)
                dispatch(setUser({id:1,name:formData.email}))
            } 
        })
    }
}