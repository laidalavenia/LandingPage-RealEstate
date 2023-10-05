import './App.css';
import Client from './components/Client';
import NavComp from './components/NavComp';
import Spacer from './components/Spacer';
import Sell from './components/Sell';
import Property from './components/Property';
import Testimony from './components/Testimony';
import About from './components/About';
// import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
      <NavComp />
      {/* <Spacer size={ 120} /> */}
      <Client />
      <Spacer size={120} />
      <Sell />
      <Spacer size={120} />
      <Property />
      <Spacer size={120} />
      <Testimony/>
      <About />
      {/* <Footer/> */}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
