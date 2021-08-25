import data from './data';
import { useRecoilState, useResetRecoilState } from 'recoil';
import { IInfo, infoState, employeesState } from './Atom';
import SearchBox from './SearchBox';
import ListBox from './ListBox';
import Information from './Information';


function Test2(props: any) {
  
  //초기값 'data'의 모든 인원을 나타냄, (searchName 함수에서 이름검색 키워드에 따른 인원들을 나타내기 위해 상태로 줌.)
  const [employees, setEmployees] = useRecoilState(employeesState); 

  //선택한 인원의 정보 상태를 나타내기 위한 상태 (<IInfo> 인터페이스 사용)
  const [info, setInfo] = useRecoilState<IInfo>(infoState);

  //검색 시 이전의 인원 정보를 초기화 시키기 위한 리코일 리셋 hook
  const resetInfo = useResetRecoilState(infoState);

  //리스트에 나타나 있는 인원 '클릭'시 IInfo 타입에 따른 인원 정보를 불러와서 setInfo에 상태 변환
  const clickEmployee = (employee: IInfo) => {
    //const selectEmployee: any = employees.filter((employee : any) => employee.employee_id === id); - 필터는 새로운 배열을 반환하기 때문에 {0: {...}} 현상이 나타남
    setInfo(employee)
  }
  
  //정적 데이터인 data 리스트 중에 이름 검색 키워드가 포함된 리스트를 filter를 이용해 새로운 배열로 만든 후  setEmployees(search)로 상태 변환, 검색 키워드 입력때 마다 이전 인원 정보 초기화
  const searchName = (event: any) => {
    const search = data.filter((infoSearch: any) => infoSearch.employee_name.includes(event.target.value));
    setEmployees(search)
    resetInfo() //info 초기화
  };
  
  return(
    
    <div className="container">
      <h1 className="subject">조민상의 연락처</h1>
      <div className="contact-wrap">
        <div className="col left">
          <SearchBox searchName={searchName}/>
          <ListBox employees={employees} clickEmployee={clickEmployee}/>
        </div>  
        <div className="col right">
          <Information info={info}/>
        </div>
      </div>
    </div>
      
    

    
  )
}

export default Test2;