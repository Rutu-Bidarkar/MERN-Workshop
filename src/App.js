import logo from './logo.svg';
import './App.css';
import Greet from './component/Greet';
import JSXAttribute from './component/jsxAttribute';
import JSXFunction from './component/jsxFunction';
import Welcome from './component/Welcome';
import Stateexample from './component/State';
import Propsexample from './component/Props';
import BootstrapExample from './BootstrapExample';
import Stateexample1 from './component/useStateHook_A';
import UseStateDemo from './component/useStateHook';
import Sideeffect from './useEffectHook';
import StudentProvider from './component/studentProvider';
import StudentConsumer1 from './component/studentConsumer1';
import StudentConsumer2 from './component/studentConsumer2';

function App() {

  const data = {fname: "Rutuja", lname: "Bidarkar", age: "20", city: "Pune"};
  return (
    <div className="App">
      <header className="App-header">
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

        <h2>This from functional components</h2>
        <Greet/>
        <JSXAttribute/>
        <JSXFunction/>
        <Welcome/>
        <Stateexample/>
        <h2>From Props Example</h2>
        <Propsexample dataattribute = {data}/>
        <BootstrapExample/>
        
        <Stateexample1/>

        <UseStateDemo/>

        <Sideeffect/>

        <StudentProvider>
          <StudentConsumer1/>
          <StudentConsumer2/>
        </StudentProvider>
      </header>
    </div>
  );
}

export default App;
