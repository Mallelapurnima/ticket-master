
import React from 'react'
import{Link} from 'react-router-dom'
function CustomerItem(props){
    return(
        
        <tr>
            <td>{props.index+1}</td>
            <td><Link to={`/customers/${props.id}`}>{props.name}</Link></td>
            <td>{props.email}</td>
            <td>{props.mobile}</td>
            <td>show<button  className="btn btn-danger"onClick={()=>{
                const conform=window.confirm('Are you sure?')
                if(conform)
               { props.handleRemove(props.id)}
            }}>remove</button></td>
        </tr>
 
    )
}
export default CustomerItem