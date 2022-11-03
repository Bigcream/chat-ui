import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Home from './pages/Home';

function App() {
    return (
        <Router>
            <Home/>
            <div className="App">
                <h1>React App</h1>
            </div>
        </Router>
    );
}

export default App;
