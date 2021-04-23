export const Search = (props) => {
    return (
        <div className="row" id="searchDiv" style={{margin: "10px"}}>
          <form className="form-inline my-2 my-lg-0 mx-auto" >
            <input 
              className="form-control mr-sm-2" 
              type="search" 
              placeholder="Search" 
              aria-label="Search"
              onChange={props.handleChange}
              value={props.value}
              />
          </form>
        </div>
    )
  }

  export default Search; 