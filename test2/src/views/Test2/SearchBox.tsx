import TextField from '@material-ui/core/TextField';
function SearchBox(props: any) {

    return(
        <div className="search-box">
                <TextField onChange={props.searchName}
                  label="검색어를 입력하세요"
                  multiline
              />
              
          </div>
    )
}

export default SearchBox;