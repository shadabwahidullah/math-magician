import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Calculator from './components/Calculator';
import Header from './components/Header';
import Home from './components/Home';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/calculator">
            <Calculator />
          </Route>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/quote" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
