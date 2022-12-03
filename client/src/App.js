import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
// import DetailContainer from './components/DetailContainer/DetailContainer';
// import Create from './components/Create/Create';

function App() {
  return (
    <>
    {/* <h1>Henry Videogames</h1> */}
    <Route exact path={'/'} component={LandingPage}/>
    <Route exact path={'/home'} component={Home} />
    {/* <Route exact path={'/detail/:idVideogame'} element={<DetailContainer />} />
    <Route exact path={'/create'} element={<Create />} /> */}
    </>
    
  );
}

export default App;
