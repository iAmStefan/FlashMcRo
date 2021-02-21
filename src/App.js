import './App.css';
import Navbar from './components/Navbar';
import { Route, Switch, useLocation } from 'react-router-dom';
import Home from './components/Home';
import Forum from './components/Forum';
import Vote from './components/Vote';
import Error from './components/Error404'
import FullHeight from "react-full-height";
import { AnimatePresence } from "framer-motion";

function App() {

  const location = useLocation();

  return (
    <FullHeight className="App">
      <Navbar />
      <AnimatePresence exitBeforeEnter>
        <Switch location={location} key={location.key}>
          <Route exact path='/' component={Home} />
          <Route path='/forum' component={Forum} />
          <Route path='/vot' component={Vote} />
          <Route component={Error}/>
        </Switch>
      </AnimatePresence>
    </FullHeight>
  );
}

export default App;
