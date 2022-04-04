import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './components/Blogs/Blogs';
import DashBoard from './components/DashBoard/DashBoard';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Login from './components/Login/Login';
import NotFound from './components/NotFound/NotFound';
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
        <Route path='/login' element ={<Login/>}></Route>
        <Route path='*' element ={<NotFound/>}></Route>

      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
