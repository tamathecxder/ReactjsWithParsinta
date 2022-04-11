import React, { Component } from "react";

class App extends Component {
  constructor() {
    super()

    this.state = {
      firstname: '',
      lastname: '',
      result: ''
    };
  }
  render() { 
    return(
      <div className="p-5">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header">Learn React JS</div>
                <div className="card-body">
                  <form onSubmit={this.submitHandler}>
                    <div className="mb-4">
                      <label htmlFor="firstname" className="form-label">Firstname</label>
                      <input type="text" onChange={this.changeHandler} value={this.state.firstname} name="firstname" id="firstname" className="form-control" />
                    </div>
                    <div className="mb-4">
                      <label htmlFor="lastname" className="form-label">lastname</label>
                      <input type="text" onChange={this.changeHandler} value={this.state.lastname} name="lastname" id="lastname" className="form-control" />
                    </div>
                    <button type="submit" className="btn btn-primary btn-block">Show</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

}

export default App;