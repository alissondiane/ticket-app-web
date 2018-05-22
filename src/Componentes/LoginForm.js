import React from 'react';
import {browserHistory} from 'react-router-3';
import { Link } from 'react-router-3';
import SelectNuevo from './SelectNuevo'
import HEROES from './heroes';


class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario : '',
      isValid : false,
      password: ''
    };
    this.onChangeUsuario = this.onChangeUsuario.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    
    this.VistaNuevaCasa = this.VistaNuevaCasa.bind(this);
    this.ValidarUsuario = this.ValidarUsuario.bind(this);
  }

  ValidarUsuario=(e)=>{
    var user = this.state.usuario;
    var password = this.state.password;
    alert("has enviado:"+ user + ' ' + password);
    /*
    fetch('https://tick-app-zuul.herokuapp.com/usuario/leer'+user+'/'+password)
    .then((response) => {
    return response.json()
    })
    .then((alumno) => {
   
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    */
  this.Mensaje();

    e.preventDefault();
  }
  Mensaje(){

    alert("Bienvenido")
    /*
      console.log(this.usuarioleido);
      if (this.usuarioleido === 0){
        alert("Usuario ingresado incorrectamente");
      }else{
       if(this.usuarioleido.tipoUsuario.nombreTu === "ADMINISTRADOR"){
         console.log( this.usuarioleido.tipoUsuario.nombreTu);
          alert("Bienvenido");
           this.router.navigate(['vistaAdmin']);
       }else{
        alert("Usuario ingresado incorrectamente tipo incorrecto");
        }
      } 
    */  
    
    browserHistory.push('/Vista/Principal');
    console.log("llego aca");

  }
  VistaNuevaCasa=(e)=>{
    
    browserHistory.push('/Casa/nueva');
    console.log("llego aca");
    e.preventDefault();
    
  }
  ValidarNombre(nombres){
    if(!nombres){
      alert("Ingrese un nombre");
      return false;
    }else{
      return true;
    }
  }

  onChangeUsuario(e) {
    this.setState({usuario: e.target.value});
  }
  onChangePassword(e) {
    this.setState({password: e.target.value});
  }

  render() {
    const { nombres, isLoading,isValid } = this.state;

    return (

      <div className="vista">
      
      <h2 className="center">Bienvenido</h2>
      <form>
      <div class="center">
        <i class="material-icons logo">person</i>
      </div>
        <div class="SplitPane1">
          <div class="SplitPane-right1">
              <input className = "input" type="text" value={this.state.usuario} onChange={this.onChangeUsuario} 
              placeholder="Usuario" name="Usuario"></input>
          </div>
        </div>
        <div class="SplitPane1">
            
            <div class="SplitPane-right1">
                <input className = "input" type="password" value={this.state.password} onChange={this.onChangePassword}
          placeholder="Contraseña" name="Contraseña"></input>
            </div>
          </div>
          <div class="center">
          <button type="submit" onClick={this.ValidarUsuario} className="btn btn-primary btn-lg">INGRESAR</button>
      </div>
         
      </form>
      </div>
    
    );
  }
}

export default LoginForm;