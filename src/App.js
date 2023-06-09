import './App.css';
import 'animate.css';
import Home from './Components/Home';
import About from './Components/About';
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() { 




  return <>
     <Home/>
     <About/>
  <Portfolio/>
  <Contact/>
  <ToastContainer />
  
    </>;
}




export default App;
