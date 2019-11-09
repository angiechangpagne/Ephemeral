import React from 'react'
import {BrowserRouter ,Switch, Route, Redirect} from 'react-router-dom'
import Dashboard from '../container/Dashboard'
import CreateLink from './Link/CreateLink'
import LinkList from './Link/LinkList'
import SearchLinks from './Link/SearchLinks'
import Login from './Auth/Login'
import ForgotPassword from './Auth/ForgotPassword'
import LinkDetail from './Link/LinkDetail'
import Header from './Header'
// CSS Styles
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

// Components
import Dashboard from './components/container/Dashboard';

function App() {
  return (
    <div className="App">
	  <Dashboard />
      <BrowserRouter> 
      <Header/>
      <Switch>
          <Route exact path='/' render={()=> <Redirect to='/new/1'/>} component={CreateLink}/>
          
      </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;