import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='home' element ={<Home/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
