import React from 'react';
import {browserHistory} from 'react-router-3';
import swal from 'sweetalert'
 



class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario : '',
      password: ''
    };
    this.onChangeUsuario = this.onChangeUsuario.bind(this);
    this.onChangePassword = this.onChangePassword.bind(this);
    this.onSubmit = this.onSubmit.bind(this);    

  }

  onSubmit=(e)=>{
    console.log("usuario:");
    console.log(this.state.usuario);
    console.log("password:");
    console.log(this.state.password);

        fetch('https://tick-app-zuul.herokuapp.com/tick-app-client/usuario/leer/'+this.state.usuario+'/'+this.state.password)
            .then((response) => {
            return response.json()
            })
            .then((alumno) => {
              console.log("recibido");
              console.log(alumno);
              /*

              if(alumno.idAlum != null){
                this.setState({ alumnos: alumno});
                console.log(this.state.alumnos)
                if(this.state.alumnos.apeNom.toUpperCase() == this.state.nombres.toUpperCase()){
                  console.log("Hola")
                  this.setState({isValid: true})
                }
                if (this.state.isValid) {
                 browserHistory.push('/'+this.state.nombres.toUpperCase())
                }
              }
              else{
                alert("Datos ingresados incorrectamente");
              }
*/
            })
            .catch(error => {
            // si hay algún error lo mostramos en consola
                console.error(error)
                console.log("usuario ingresado incorrectamente")
            });
        
    console.log("paso el fetch")
    this.Mensaje();
   
    e.preventDefault();
    
  }
  Mensaje(){

    swal("Bienvenido!", this.state.usuario, "success");
    
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
  

  onChangeUsuario(e) {
    /*if(!e.target.value){
      alert("Ingrese un nombre");
    }else{
      this.setState({usuario: e.target.value});
    }*/
    this.setState({usuario: e.target.value});
    
  }
  onChangePassword(e) {
    /*if(!e.target.value){
      alert("Ingrese una contraseña");
    }else{
      this.setState({password: e.target.value});
    }*/
    this.setState({password: e.target.value});
  }

  render() {

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
          <button type="submit" onClick={this.onSubmit} className="btn btn-primary btn-lg">INGRESAR</button>
      </div>
         
      </form>
      </div>
    
    );
  }
}

export default LoginForm;