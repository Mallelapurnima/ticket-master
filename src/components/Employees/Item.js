import React from 'react'
function EmployeeItem(props){
    return(
        
        <tr>
            <td>{props.index+1}</td>
            <td>{props.name}</td>
            <td>{props.email}</td>
            <td>{props.mobile}</td>
            <td>show<button className="btn btn-danger" onClick={()=>{
                const conform=window.confirm('Are you sure?')
                if(conform)
               { props.handleRemove(props.id)}
            }}>remove</button></td>
        </tr>
 
    )
}
export default EmployeeItem
