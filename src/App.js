import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';
import Modal from './Modal.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>CS 330L</h1>
      <h2>Section - 011</h2>
      <p>WVU ID: 800427508</p>
      <p>Hi, I am Ben Burris</p>
      <Card />
    </div>
  );
}

export default App;