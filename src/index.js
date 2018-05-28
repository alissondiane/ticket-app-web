import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router-3';
import LoginForm from './Componentes/LoginForm';
import VistaPrincipal from './Componentes/VistaPrincipal';
import MenuNuevo from './Componentes/MenuNuevo';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class Index extends React.Component {
  
    render() {
        return(
            <Router history={browserHistory}>
            <Route
                component={() => <LoginForm />}
                path="/">
            </Route>
           
            <Route path="/Vista/Principal" component={VistaPrincipal}></Route>
            <Route path="/Vista/MenuNuevo" component={MenuNuevo}></Route>
  
          </Router>
          )
      }
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));

registerServiceWorker();