import './App.css';
import Navbar from './Navbar.js';
import Card from './Card.js';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div id="text_container">
        <h1>CS 330L</h1>
        <h2>Section - 011</h2>
        <p>WVU ID: 800427508</p>
        <p>Hi, I am Ben Burris</p>
      </div>
      <Card />
    </div>
  );
}

export default App;