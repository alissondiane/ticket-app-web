import React from 'react';
import { browserHistory } from 'react-router-3';
import MENU from './Data-Menu';
import FiltroFecha from './FiltroFecha';
import MenuList from './Menu.Semana';
import TableHeaderMenuList from './Table-Header-MenuList'
import '../App.css';
import ComidaDiaModal from './ComidaDiaModal'; //modal comida por dia
import FechaActual from './FechaActual'; //fecha
import swal from 'sweetalert'

class VistaPrincipal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fecha: '',
      modalOption: false, //apertura del modal
      modalComida: [],
      menu:[],
      name: this.props.params.name,
      bloqueado:false
    };

    this.CerrarSesion = this.CerrarSesion.bind(this);
    this.MenuNuevo = this.MenuNuevo.bind(this);
    this.MenuBusqueda= this.MenuBusqueda.bind(this);
    this.VistaSanciones=this.VistaSanciones.bind(this);
    this.ActualizarVista=this.ActualizarVista.bind(this);
  }

  CerrarSesion = (e) => {

    browserHistory.push('/');
    console.log("VISTA LOGIN");
    e.preventDefault();

  }
  MenuNuevo = (e) => {

    browserHistory.push('/Vista/MenuNuevo/'+this.state.name);
    console.log("VISTA MENU NUEVO");
    e.preventDefault();

  }
  MenuBusqueda= (e) => {

    browserHistory.push('/Vista/MenuBusqueda/'+this.state.name);
    console.log("VISTA MENU BUSQUEDA");
    e.preventDefault();

  }
  VistaSanciones= (e) => {

    browserHistory.push('/Vista/Sanciones/'+this.state.name);
    console.log("VISTA SANCIONES");
    e.preventDefault();

  }


  

  // capturamos lo seleccionado de Menu.Semana.js
  modalSelectedOption = (comida) => {
    this.setState(()=>({ 
      modalComida: comida,
      modalOption: true }))
  }
  //cerramos el modal
  modalClearOption = () => {
    this.setState( () => ({ modalOption: false}) );
    this.ActualizarVista();
    
  }
  ActualizarVista=()=>{
    var fechas2 = this.FechaProximaSemana();
    console.log("fechas de la semana");
    console.log("un dia de la otra semana");
    console.log(fechas2[0]);
    //validamos si ya hay menu creado de la siguiente semana//
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/listar/semanal/'+fechas2[0])
    .then((response) => {
    return response.json()
    })
    .then((menues) => {
      console.log("menues recibidos");
      console.log(menues);
      if(menues.lunes == null){
        this.setState(()=>({
          bloqueado:false}))
      }else{
        this.setState(()=>({
          bloqueado:true}))
      }
        
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    var fecha = new Date();
    var dd = fecha.getDate();
    var mm = fecha.getMonth()+1;
    console.log("dia");
    console.log(dd);
    
    if(dd<10) {
        dd='0'+dd;
    } 
    if(mm<10) {
      mm='0'+mm;
      console.log("mes con 0");
      console.log(mm);
  } 
    var diaActual =fecha.getFullYear()+"-"+mm+"-"+dd;
    var FechaActual = new String(diaActual);
    console.log(FechaActual);
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/listar/semanal/'+FechaActual)
    .then((response) => {
    return response.json()
    })
    .then((menues) => {
      //data
  
        console.log("data recibida");

        console.log(menues)
        console.log("menues del dia lunes")
        console.log(menues.lunes);
        var menuc = [];
        var lunes = {
          lunes : menues.lunes
        };
        var martes = {
          martes : menues.martes
        };
        var miercoles = {
          miércoles : menues.miercoles
        };
        var jueves = {
          jueves :menues.jueves
        };
        var viernes = {
          viernes : menues.viernes
        };
        var sabado = {
          sábado : menues.sabado
        };
        var domingo = {
          domingo : menues.domingo
        };
      
        menuc.push(lunes);
        menuc.push(martes);
        menuc.push(miercoles)
        menuc.push(jueves);
        menuc.push(viernes);
        menuc.push(sabado);
        menuc.push(domingo);
        console.log("menu de la semana");
        console.log(menuc);
        console.log()
        this.setState({ menu: menuc})
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
  }
  FechaProximaSemana()
  {
      var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
      var Semana = ["","","","","","",""];
      
      var fecha=new Date();
      var dia = diasSemana[fecha.getDay()];
     
      if(dia === "Domingo"){
        var primerDia = new Date();
        for (let i = 1; i <= Semana.length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*i);
          var mm = dia1.getMonth()+1;
          var dd = dia1.getDate();
          if(dd<10) {
            dd='0'+dd;
          } 
          if(mm<10) {
          mm='0'+mm;
          } 
          Semana[i-1] =dia1.getFullYear()+"-"+mm+"-"+dd;
        }
      }
      if(dia === "Lunes"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000)*6);
        for (let i= 1; i <= Semana.length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*i);
          var mm = dia1.getMonth()+1;
          var dd = dia1.getDate();
          if(dd<10) {
            dd='0'+dd;
          } 
          if(mm<10) {
          mm='0'+mm;
          } 
          Semana[i-1] =dia1.getFullYear()+"-"+mm+"-"+dd;
        }
      }
      if(dia === "Martes"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000)*5);
        for (let i = 1; i <= Semana .length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*i);
          var mm = dia1.getMonth()+1;
          var dd = dia1.getDate();
          if(dd<10) {
            dd='0'+dd;
          } 
          if(mm<10) {
          mm='0'+mm;
          } 
          Semana[i-1] =dia1.getFullYear()+"-"+mm+"-"+dd;
        }
      }
      if(dia === "Miercoles"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000)*4);
        for (let i = 1; i <= Semana .length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*i);
          var mm = dia1.getMonth()+1;
          var dd = dia1.getDate();
          if(dd<10) {
            dd='0'+dd;
          } 
          if(mm<10) {
          mm='0'+mm;
          } 
          Semana[i-1] =dia1.getFullYear()+"-"+mm+"-"+dd;
        }
      }
      if(dia === "Jueves"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000)*3);
        for (let i = 1; i <= Semana .length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*i);
          var mm = dia1.getMonth()+1;
          var dd = dia1.getDate();
          if(dd<10) {
            dd='0'+dd;
          } 
          if(mm<10) {
          mm='0'+mm;
          } 
          Semana[i-1] =dia1.getFullYear()+"-"+mm+"-"+dd;
        }
      }
      if(dia === "Viernes"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000)*2);
        for (let i = 1; i <= Semana .length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*i);
          var mm = dia1.getMonth()+1;
          var dd = dia1.getDate();
          if(dd<10) {
            dd='0'+dd;
          } 
          if(mm<10) {
          mm='0'+mm;
          } 
          Semana[i-1] =dia1.getFullYear()+"-"+mm+"-"+dd;
        }
      }
      if(dia === "Sabado"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000));
        for (let i = 1; i <= Semana .length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*i);
          var mm = dia1.getMonth()+1;
          var dd = dia1.getDate();
          if(dd<10) {
            dd='0'+dd;
          } 
          if(mm<10) {
          mm='0'+mm;
          } 
          Semana[i-1] =dia1.getFullYear()+"-"+mm+"-"+dd;
        }
      }
      return Semana;
  }  

  componentWillMount() {

    var fechas = this.FechaProximaSemana();
    console.log("fechas de la semana");
    console.log("un dia de la otra semana");
    console.log(fechas[0]);
    //validamos si ya hay menu creado de la siguiente semana//
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/listar/semanal/'+fechas[0])
    .then((response) => {
    return response.json()
    })
    .then((menues) => {
      console.log("menues recibidos");
      console.log(menues);
      if(menues.lunes == null){
        this.setState(()=>({
          bloqueado:false}))
      }else{
        this.setState(()=>({
          bloqueado:true}))
      }
        
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
    //Validamos si ya hay menu creado de la siguiente semana//

    var fecha = new Date();
    var dd = fecha.getDate();
    var mm = fecha.getMonth()+1;
    console.log("dia");
    console.log(dd);
    
    
    if(dd<10) {
        dd='0'+dd;
    } 
    if(mm<10) {
      mm='0'+mm;
      console.log("mes con 0");
      console.log(mm);
  } 
    var diaActual =fecha.getFullYear()+"-"+mm+"-"+dd;
    var FechaActual = new String(diaActual);
    console.log(FechaActual);
    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/listar/semanal/'+FechaActual)
    .then((response) => {
    return response.json()
    })
    .then((menues) => {
      //data
  
        console.log("data recibida");

        console.log(menues)
        console.log("menues del dia lunes")
        console.log(menues.lunes);
        var menuc = [];
        var lunes = {
          lunes : menues.lunes
        };
        var martes = {
          martes : menues.martes
        };
        var miercoles = {
          miércoles : menues.miercoles
        };
        var jueves = {
          jueves :menues.jueves
        };
        var viernes = {
          viernes : menues.viernes
        };
        var sabado = {
          sábado : menues.sabado
        };
        var domingo = {
          domingo : menues.domingo
        };
      
        menuc.push(lunes);
        menuc.push(martes);
        menuc.push(miercoles)
        menuc.push(jueves);
        menuc.push(viernes);
        menuc.push(sabado);
        menuc.push(domingo);
        console.log("menu de la semana");
        console.log(menuc);
        console.log()
        this.setState({ menu: menuc})
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });
  }
  render() {


    return (
      

    <div className="">
    

    <ul className="ula">
    <li className="OGBU"></li>
    <li className="Seleccionado  z-depth-1 " ><a>Menú<i className="material-icons right ">restaurant</i></a></li>
    <li><a onClick={this.MenuBusqueda} >Búsqueda<i className="material-icons right">search</i></a></li>
    <li><a onClick={this.VistaSanciones} >Sanciones<i className="material-icons right">gavel</i></a></li>
    </ul>
    <div className = "vistaderecha">
    <div className=" z-depth-1 cabecera">
    
    <a><i className="material-icons right logo1 azul3 z-depth-1 ">person</i></a>
    <a className="salir" onClick={this.CerrarSesion} >Cerrar Sesión</a>
    <a className="salir2">Administrador {this.state.name}</a>
    
    </div>
        <div className="row">
              <h4>Menú de la semana<i className="material-icons logo1 right z-depth-1">restaurant</i></h4>
        </div>
        <hr />
        <div className="SplitPane row">

          <div className="col-xs-6 margen_top">
            <FechaActual />
          </div>
        
          <div className=" col-xs-6 margen_top">
            
            <button onClick={this.MenuNuevo} disabled={this.state.bloqueado} className="waves-effect waves-light btn-large botonazul2 right" type="submit">Crear Menú<i className="material-icons left">restaurant</i></button>
            
          </div>
        </div>

        <div className="SplitPane row center-xs">
          <div className="center-xs-12">
            <table className="total table ">
            <MenuList 
                listado={this.state.menu}
                modalSelectedOption={this.modalSelectedOption} /*metodo de captura de datos*//>
            </table>
            <ComidaDiaModal
              modalOption={this.state.modalOption}
              modalComida={this.state.modalComida}
              modalClearOption={this.modalClearOption}
              modalComida={this.state.modalComida}/>
          </div>
        </div>
    </div>
    </div>
    );
  }
}

export default VistaPrincipal;