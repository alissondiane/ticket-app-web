import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router-3';
import LoginForm from './Componentes/LoginForm';
import VistaPrincipal from './Componentes/VistaPrincipal';
import VistaSanciones from './Componentes/VistaSanciones';
import MenuNuevo from './Componentes/MenuNuevo';
import VistaBusquedaMenu from './Componentes/Vista-Busqueda-Menu';
import VistaAtencion from './Componentes/VistaAtencion';
//import Bootstrap from 'bootstrap/dist/css/bootstrap.css';


class Index extends React.Component {
  
    render() {
        return(
            <Router history={browserHistory}>
            <Route
                component={() => <LoginForm />}
                path="/">
            </Route>
           
            <Route path="/Vista/Principal/:name" component={VistaPrincipal}></Route>
            <Route path="/Vista/MenuNuevo/:name" component={MenuNuevo}></Route>
            <Route path="/Vista/MenuBusqueda/:name" component={VistaBusquedaMenu}></Route>
            <Route path="/Vista/Sanciones/:name" component={VistaSanciones}></Route>
            <Route path="/Vista/Atencion/:name" component={VistaAtencion}></Route>
  
          </Router>
          )
      }
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));

registerServiceWorker();