import React from 'react'
import CardBody from './Components/CardBody'
function App() {

  return (
    <div className="page-content page-container" id="page-content">
      <div className="padding">
        <div className="row container d-flex justify-content-center">
          <div className="col-md-12">
            <div className="card px-3">
              <CardBody />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
