import './App.scss';
import { BrowserRouter as Router } from 'react-router-dom';

//views
import Home from "./home/home.view";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Router>
          <Routes>
             <Route path="/" exact/>
                <Home />
             </Route>
          </Routes>
        </Router>
      </header>
    </div>
  );
}

export default App;
