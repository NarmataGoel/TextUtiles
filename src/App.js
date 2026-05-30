
import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
import About from './components/About';
import Alert from './components/Alert';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);
  const [cls, setCls] = useState('null');
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });
  };
  setTimeout( ()=>{
   setAlert(null);
  } ,1500);
  const toggleMode = (cls) => {
    removeBodyClasses();
    document.body.classList.add('bg-'+cls)
    setCls(cls);
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#172c41';
      showAlert("Dark mode has been enabled", "success");
      document.title='TextUtiles - Dark Mode';
    //  setInterval(()=>{
    //   document.title='TextUtiles is amazing';
    //  },1000);
    //  setInterval(()=>{  
    //   document.title='Install TextUtiles now';
    //  },1500);
    }
     else {
      setMode('light');
       document.body.style.backgroundColor = 'white';
       showAlert("Light mode has been enabled", "success");
       document.title='TextUtiles - Light Mode';
    }
  };
  const removeBodyClasses = () => {
    document.body.classList.remove('bg-light');
    document.body.classList.remove('bg-dark');
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-secondary');
    document.body.classList.remove('bg-danger');
    document.body.classList.remove('bg-warning');
  }

  return (
    <Router>
      <Navbar title="My App" nextline="Search..." mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textform mode={mode} alert={alert} showAlert={showAlert} />} />
          <Route path="/about" element={<About />} />
           <Route path="/home" element={<Textform mode={mode} alert={alert} showAlert={showAlert} />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
