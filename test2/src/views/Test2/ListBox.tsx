import EmployeeListItem from "./EmployeeListItem";

function ListBox(props: any) {

    return(
        <div className="contact-list">
        <ul>
        {props.employees.map((employee: any) => {
          return(
            <EmployeeListItem key={employee.employee_id} employee={employee} clickEmployee={props.clickEmployee}/>
          );
        })}
        </ul>
      </div>
    )
}

export default ListBox;