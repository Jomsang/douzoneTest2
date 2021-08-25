function EmployeeListItem(props: any) {

    return(
        <>
            <li key={props.employee.employee_id} onClick={()=>{props.clickEmployee(props.employee)}}><button>{props.employee.employee_name}</button></li>
            
        </>
    )
}

export default  EmployeeListItem;