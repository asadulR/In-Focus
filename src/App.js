import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
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
        <Route path='/blogs' element ={<Blogs/>}></Route>
      </Routes>
    </div>
  );
}

export default App;
