import React from 'react'


const Search = props => {
  return (
    <div className="col col-md-4 searchbox">
      <input type="text" className="form-control"
       value = {props.value}
       onChange={(e)=> props.setSearchValue(e.target.value)}
       placeholder="search movie"></input>
    </div>
  )
}


export default Search
