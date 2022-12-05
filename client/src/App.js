import React from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from './components/LandingPage/LandingPage';
import Home from './components/Home/Home'
// import DetailContainer from './components/DetailContainer/DetailContainer';
// import Create from './components/Create/Create';
import Page from './components/Page404/Page404';

function App() {
  return (
    <>
     <Switch>
        <Route exact path={'/'} component={LandingPage}/>
        <Route exact path={'/home'} component={Home} />
        {/* <Route exact path={'/detail/:idVideogame'} element={<DetailContainer />} />
        <Route exact path={'/create'} element={<Create />} /> */}
        <Route path="*" component={Page}/>
     </Switch>
    
    </>
    
  );
}

export default App;
