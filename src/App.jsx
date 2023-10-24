import React from 'react';
import NoteItem from './components/Note';


function App(props) {
  const { Ns } = props;
  console.log(Ns);
  const addNote = (event) => {
    event.preventDefault();
    console.log("button clicked");
    
  } 

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {Ns.map((guid) => {
          return <NoteItem key={guid.id} guid={guid} />;
        })}
      </ul>
      <form>
        <input />
        <button onClick={addNote}>save notes</button>
      </form>




      import { Component } from "react";

class App extends Component{
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    }
  }
  // incremental = () => {
  //   this.setState({
  //     count: this.state.count +1,
  //   })
  // }

  Plushandle = () => {
    this.setState((prevState) => ({
      count: prevState.count +1,
    })) 
}

  
    minushandle = () => {
    this.setState((prevState) => ({
      count: prevState.count -1,
    })) 
  }
  
      Zerohandle = () => {
    this.setState((prevState) => ({
      count: 0,
    })) 
}

  render() {
    return (
      <div>
        <p>count: {this.state.count} </p>
        <button onClick={this.Plushandle}>Plushandle</button>
        <button onClick={this.minushandle}>minushandle</button>
        <button onClick={this.Zerohandle}>Zerohandle</button>
      </div>
    )
  }
}
export default App;
    </div>
  );
}

export default App;
