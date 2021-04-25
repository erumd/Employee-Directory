const Search2 = ({handleChange, value}) => (
        <div className="searchBar row mt-5">
          <form className="form mt-3">
            <input
              className="form-control w-25 mx-auto"
              type="search"
              placeholder="Search for Employee"
              name="search"
              onChange={handleChange}
                value={value}
            />
            
            
          </form>
          <div>
            <button
              //   onClick={handleFormSubmit}
              className="btn btn-secondary mt-3 mb-5 d-grid mx-auto"
              type="submit"
            >
              Search
            </button>
            </div>
        </div>
    //   );
    );
    
    export default Search2;