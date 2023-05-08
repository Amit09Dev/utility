import Navbar from "./components/Navbar.jsx";
import TextForm from "./components/TextForm.jsx";
import About from './components/About.jsx'
import { useState } from "react";
import Alert from "./Alert.jsx";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

// Alert function

const setAlertMsg = (message, type)=>{
  setAlert({
    msg: message,
    type: type
  })
  setTimeout(() => {
    setAlertMsg(null)
  }, 2000);
}

const removeBgclr = ()=>{
  document.body.classList.remove('bg-primary') 
  document.body.classList.remove('bg-danger')  
  document.body.classList.remove('bg-success') 
  document.body.classList.remove('bg-dark')
  document.body.classList.remove('bg-warning') 
}



// Toggle for dark and light mode 
  const toggleMode = (clr) => {
    removeBgclr();
    document.body.classList.add('bg-' + clr)
    console.log(clr);
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = '#3d444b',
      document.body.style.color ='white',
      document.getElementById('text-box').style.backgroundColor = '#3d444b'
      document.getElementById('text-box').style.color = 'white';
      setAlertMsg(' D ark mode has been enabled', 'success');
      document.title = 'Text Utilz - Dark Mode';

    } else {
      setMode("light");
      document.body.style.backgroundColor = 'white',
      document.body.style.color ='black',
      document.getElementById('text-box').style.backgroundColor = 'white'
      document.getElementById('text-box').style.color = 'black';
      setAlertMsg(' Light mode has been enabled' , 'success');
      document.title = 'Text Utilz - Light Mode';

    }
  };
  return (
    <>
    <BrowserRouter>
      <Navbar title="TextUtilz" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert}/>
      <Routes>
      < Route path="/*" element={<TextForm setAlertMsg={setAlertMsg} heading="Enter your text to analyse"  /> } />
      <Route path="/about" element={<About/>} />
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
