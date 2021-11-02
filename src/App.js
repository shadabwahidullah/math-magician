import {
  BrowserRouter as Router, Switch, Route,
} from 'react-router-dom';

// components
import Calculator from './components/Calculator';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
