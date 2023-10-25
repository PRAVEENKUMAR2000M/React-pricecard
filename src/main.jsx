
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';

<<<<<<< HEAD

=======
>>>>>>> 3ccc4a25d5d295bfe8c76df524843db6e8bf5a4d
const books = [
  {
    id: 1,
    content: "praveenkumar BE",
    important: true
  },
  {
    id: 2,
    content: "IT support engineer",
    important: true
  },
  {
    id: 3,
    content: "Eduction background was BE mechanical engineer",
    imoprtant: false
  },
  {
    id: 4,
    content: "now full stack developer",
    important: false
  },
];

<<<<<<< HEAD
ReactDOM.createRoot(document.getElementById('root')).render(<App />);

=======
ReactDOM.createRoot(document.getElementById('root')).render(<App Ns={books} />);
>>>>>>> 3ccc4a25d5d295bfe8c76df524843db6e8bf5a4d
