import React, {useState} from 'react'
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';

export const AppContext = React.createContext()
function App() {
  const [activeTab, setActiveTab] = React.useState("tab1");
 //State for from where
  //==================================================================
  const [filteredSuggestions, setFilteredSuggestions] = useState([]);
  const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [input, setInput] = useState("");

  //State for to where
  //==================================================================
  const [filteredToSuggestions, setFilteredToSuggestions] = useState([]);
  const [activeToSuggestionIndex, setActiveToSuggestionIndex] = useState(0);
  const [showToSuggestions, setShowToSuggestions] = useState(false);
  const [toinput, setToInput] = useState("");

  //State for switch
  const [switchSides, setSwitchSides] = useState(false);
  const [showPassengerDropdown, setShowPassengerDropdown] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [adult, setAdult] = useState(1);
  const [children, setChildren] = useState(0);
  const [infant, setInfant] = useState(0);
  const [count, setCount] = useState(adult + children + infant);
  const state = {
    activeTab,
    setActiveTab,
    filteredSuggestions,
    setFilteredSuggestions,
    activeSuggestionIndex,
    setActiveSuggestionIndex,
    showSuggestions,
    setShowSuggestions,
    input,
    setInput,
    filteredToSuggestions,
    setFilteredToSuggestions,
    activeToSuggestionIndex,
    setActiveToSuggestionIndex,
    showToSuggestions,
    setShowToSuggestions,
    toinput,
    setToInput,
    switchSides,
    setSwitchSides,
    showPassengerDropdown,
    setShowPassengerDropdown,
    showDropdown,
    setShowDropdown,
    adult,
    setAdult,
    children,
    setChildren,
    infant,
    setInfant,
    count,
    setCount
  }
  return (
    <AppContext.Provider value={state}>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
    </AppContext.Provider>
  );
}

export default App;
