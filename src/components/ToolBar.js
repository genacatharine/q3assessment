import React from 'react'

const ToolBar = ({messages, seeker, showAll, toggleCompose}) =>{
  let totalCount = messages.length
  const searchFor = (e) => {
    seeker(e.target.value)
  }
  const clear= (e) => {
    e.target.search.value = ""
  }


  return (
    <div className="row">
      <div className="col-lg-6">
        <div className="input-group">
          <input onChange={ searchFor }  id="search" name="search" type="text" placeholder="SEARCH HERE"></input>
              <h3>Total Messages:<span className="badge badge-secondary">{ totalCount }</span></h3>
            <button className="btn btn-default" onClick={toggleCompose} type="button" id="compose">Compose</button>

        </div>
      </div>
    </div>
  )
}

export default ToolBar
