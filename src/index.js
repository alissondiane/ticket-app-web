import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Componentes/App';
import Login from './Componentes/Login';
import NameForm from './Componentes/NameForm';
import registerServiceWorker from './registerServiceWorker';
import { Router, Route, browserHistory } from 'react-router-3';
import LoginForm from './Componentes/LoginForm';
import ListadoCarros from './Componentes/ListadoCarros';
import ListadoModelos from './Componentes/ListadoModelos';
import CarroNuevo from './Componentes/CarroNuevo';
import ModeloNuevo from './Componentes/ModeloNuevo';
import VistaPrincipal from './Componentes/VistaPrincipal';
import ClienteNuevo from './Componentes/Cliente-Nuevo';
import CasaNueva from './Componentes/Casa-Nueva';
import MenuNuevo from './Componentes/MenuNuevo';
import ListadoClientes from './Componentes/ListadoClientes';

class Index extends React.Component {
  
    constructor(props) {
      super(props)
      this.state = { 
        pagos: [],
        name: 'alex%20rojas'
       }
      this.FiltrarNombre= this.FiltrarNombre.bind(this);
      this.validado = true;
    }
    render() {
        return(
            <Router history={browserHistory}>
            <Route
                component={() => <LoginForm />}
                path="/">
            </Route>
            <Route path="/:name" component={App}></Route>
            <Route path="/Listado/Carros" component={ListadoCarros}></Route>
            <Route path="/Listado/Modelos" component={ListadoModelos}></Route>
            <Route path="/Carro/Nuevo" component={CarroNuevo}></Route>
            <Route path="/Modelo/Nuevo" component={ModeloNuevo}></Route>
            <Route path="/Vista/Principal" component={VistaPrincipal}></Route>
            <Route path="/Cliente/nuevo" component={ClienteNuevo}></Route>
            <Route path="/Casa/nueva" component={CasaNueva}></Route>
            <Route path="/Listado/Clientes" component={ListadoClientes}></Route>
            <Route path="/Vista/MenuNuevo" component={MenuNuevo}></Route>
  
          </Router>
          )
      }
      FiltrarNombre(nombre){
        this.setState({ name: nombre});
      }
}

ReactDOM.render(
    <Index/>, document.getElementById('root'));

registerServiceWorker();