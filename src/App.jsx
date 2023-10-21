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
    </div>
  );
}

export default App;








