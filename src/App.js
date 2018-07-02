import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      things: [],
      newThing: ""
    };

  this.formSubmitted = this.formSubmitted.bind(this);
  this.addThing = this.addThing.bind(this);
  this.thingChanged = this.thingChanged.bind(this);
  }
thingChanged(event){
  this.setState({
    newThing: event.target.value
  })
}
addThing(){
  this.setState({
    things: [...this.state.things, this.state.newThing],
    newThing: ""
  })
}
formSubmitted(event){
  event.preventDefault();
  this.addThing();
}
  render() {
    return (
      <div className="container mt-5">
      <h1>New Thing</h1>
      <form onSubmit={this.formSubmitted}>
        <div className="form-group">
          <label htmlFor="thing"></label>
          <input onChange={this.thingChanged}  value={this.state.newThing} type="text" className="form-control" placeholder="Thing"/>
        </div>
      <button type="submit" className="btn btn-primary btn-lg btn-block">Add Thing </button>
      </form>
      <ul>{this.state.things.map(thing => {
        return <li key={thing}>{thing}</li>
      })}</ul>
      </div>
    );
  }
}

export default App;
