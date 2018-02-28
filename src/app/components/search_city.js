import React from 'react'

const SearchCity = (props) => {
    return (
            <nav className="navbar navbar-dark bg-dark mb-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <a className="navbar-brand text-light font-weight-bold">WEATHER APP</a>
                </div>
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" placeholder="Enter a City here" aria-label="Search"/>
                  <button className="btn btn-light my-2 my-sm-0" type="submit" onClick={(searchDefault) => this.handleForm(searchDefault)}>Search</button>
                </form>
              </div>
            </nav>
           )
     }

  function handleForm(searchDefault) {
   searchDefault.preventDefault();
    const city = this.cityname.value
    this.props.cityInfo(city);
    this.refs.cityname.value = '';
  }

export default SearchCity
