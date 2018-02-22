import React, {Component} from 'react'

class SearchCity extends Component {
  render() {
    return (
            <nav className="navbar navbar-dark bg-dark mb-2">
              <div className="input-group">
                <div className="input-group-prepend">
                  <a className="navbar-brand text-light font-weight-bold">WEATHER APP</a>
                </div>
                <form className="form-inline">
                  <input className="form-control mr-sm-2" type="search" ref="cityname" placeholder="Enter a City here" aria-label="Search"/>
                  <button className="btn btn-light my-2 my-sm-0" type="submit" onClick={(searchDefault) => this.handleForm(searchDefault)}>Search</button>
                </form>
              </div>
            </nav>
           )
     }

  handleForm(searchDefault) {
   searchDefault.preventDefault();
    const city = this.refs.cityname.value
    this.props.cityInfo(city);
    this.refs.cityname.value = '';  
  }
}

export default SearchCity

