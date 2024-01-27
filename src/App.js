import './App.css';
import Home from './components/Home'
import About from './components/About'
import MyForm from './components/MyForm'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
   
    <div className='App'>
    <ToastContainer/>
      <Home/>
      <About/>
      <MyForm/>
    </div>
  );
}

export default App;








// import React from 'react';
// import './App.css';
// import Home from './components/Home';
// import About from './components/About';
// import MyForm from './components/MyForm';
// import Navbar from './components/Navbar';
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';

// function App() {
  
//   return (
//     <div className='App'>
//       <Navbar/>
//       <ToastContainer />
//       <Home  />
//       <About  />
//       <MyForm />
//     </div>
//   );
// }

// export default App;
