import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

export const AppContecxt = React. createContext()
function App() {


  const state = {

  }
  return (
    <AppContecxt.Provider value={state}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </AppContecxt.Provider>
  );
}

export default App;
