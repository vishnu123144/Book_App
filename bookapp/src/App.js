
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import register from './Components/register/Register';


function App() {
  return (
    <div>
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={register}/>
            <Route exact path="/login" component={Login}/>
            
          </Switch>
          
   </Router>
     </div>
  );
}

export default App;
