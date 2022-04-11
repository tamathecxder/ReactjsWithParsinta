import React, { Component } from "react";
import axios from 'axios';

class App extends Component {
  constructor() {
    super()

    this.state = {
      user: []
    }

  }

  getUser = async () => {
    let response = await axios('https://jsonplaceholder.typicode.com/users/1');
    this.setState({
      user: response.data
    });
  }

  componentDidMount() {
    this.getUser();
  }
  
  render() {
    const user = this.state.user;
    return(
      <div>
        <div>My name is {user.name}</div>
        <div>My name is {user.username}</div>
        <div>My name is {user.address.city}</div>
      </div>
    )
  }

}

export default App;