function Information(props: any) {

    return(
        <>
        {props.info.employee_id === 0 ?

            <span className="emptyset">정보가 없습니다.</span>
            :
            <ul className="info">
                  <li>이름: {props.info.employee_name}</li>
                  <li>부서: {props.info.employee_department}</li>
                  <li>휴대폰: {props.info.employee_phone}</li>
                  <li>메일: {props.info.employee_name}{props.info.employee_email}</li>
            </ul>
            }
        </>    
    )
}

export default Information;