import React, {Component} from 'react'

class SearchCity extends Component {
  render() {
    return (
          <div className='search-bar'>
            <form onSubmit={this.handleForm.bind(this)}>
              <label><input type="search" ref="cityname" placeholder="Type Cityname + Enter"/></label>
            </form>
          </div>
        )
     }

  handleForm(e) {
   e.preventDefault();
    let cityname = this.refs.cityname.value
    this.props.fetchCity(cityname);
    this.refs.cityname.value = '';  
  }
}

export default SearchCity