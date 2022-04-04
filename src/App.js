import { Route, Routes } from 'react-router-dom';
import './App.css';
import DashBoard from './components/DashBoard/DashBoard';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import AllReviews from './components/Reviews/AllReviews';

function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path='/' element ={<Home/>}></Route>
        <Route path='home' element ={<Home/>}></Route>
        <Route path='/reviews' element ={<AllReviews/>}></Route>
        <Route path='/dashboard' element ={<DashBoard/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
