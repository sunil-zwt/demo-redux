import logo from './logo.svg';
import './App.css';
import { Routes ,Route} from 'react-router-dom';
import Home from './pages/Home';
import Adduser from './pages/Adduser';
import Edituser from './pages/Edituser'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/adduser' element={<Adduser/>}/>
        <Route path='/edituser/:id' element={<Edituser/>}/>
      </Routes>
    </div>
  );
}

export default App;
