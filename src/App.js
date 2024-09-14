import logo from './logo.svg';
import './App.css';
import StatefulComponent from './components/StatefulComponent';
import StatelessComponent from './components/StatelessComponent';
import ClassComponent from './components/ClassComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <StatefulComponent/>
        <StatelessComponent name={"stateless"}/>
        <ClassComponent/>
      </header>
    </div>
  );
}

export default App;
