 import './App.css';
import Landing from './pages/Landing';
import Home from './pages/Home';
import {Route, Routes} from 'react-router-dom'
const App = () => {
  return (
    <div className="App">
       <Routes>
         <Route path="/" Component={Landing} />
         <Route path="/home" Component={Home} />
       </Routes>
    </div>
  );
}

export default App;
