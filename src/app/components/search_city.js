import React from 'react'

const SearchCity = (props) => {
    return (
            <nav className="navbar navbar-dark bg-dark mb-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <a className="navbar-brand text-light font-weight-bold">WEATHER APP</a>
                </div>
                <form className="form-inline" onSubmit={(e) => handleForm(e)}>
                  <input className="form-control mr-sm-2" type="search" placeholder="Enter a City here" aria-label="Search"/>
                  <button className="btn btn-light my-2 my-sm-0" type="submit" >Search</button>
                </form>
              </div>
            </nav>
           )
     }

  function handleForm(e) {
   e.preventDefault();
   console.log(e)
    // const city = this.cityname.value
    // this.props.cityInfo(city);
    // this.props.cityname.value = '';
  }


export default SearchCity
