import './App.css';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Login from './Login';
import Home from './Home';
// import About from './About';
// import Blog from './Blog';
// import Contact from './Contact';
function App() {
  return (
  <Router>
    <Routes>
      <Route path="/" element={<RegisterForm/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      {/* <Route path='/about' element={<About/>}/>
      <Route path='/blog' element={<Blog/>}/>
      <Route path='/contact' element={<Contact/>}/> */}
    </Routes>
  </Router>
  );
}

export default App;
