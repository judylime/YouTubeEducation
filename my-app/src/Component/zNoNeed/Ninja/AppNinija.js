import React from 'react';
import Ninjas from './Ninjas';
import AddNinja from "./AddNinja"

class App extends React.Component {
  state = {
  ninjas: [
      { name: 'Ryu', age: 30, belt: 'black', id: 1 },
      { name: 'Yoshi', age: 20, belt: 'green', id: 2 },
      { name: 'Crystal', age: 25, belt: 'pink', id: 3 }
    ]
  }
  addNinja = (ninja) => {
        //update the ninjas,and add new elements in to array
    ninja.id = Math.random();
    let ninjas = [...this.state.ninjas, ninja];
      //copy old array
    this.setState({
      ninjas: ninjas
    });
  }

  deletNinja =(id)=>{
    let ninjas = this.state.ninjas.filter(ninja=>{
      return ninja.id!==id
    });
    this.setState({
      ninjas:ninjas
    })
  }
  render() {
    return (
      <div className="App">
        <h1>My first React app</h1>
        <Ninjas deleteNinja= {this.deletNinja} ninjas={this.state.ninjas}/>
        <AddNinja addNinja={this.addNinja} />
      </div>
    );
  }
}
  
export default App;
