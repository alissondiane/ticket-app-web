import React from 'react';
import {browserHistory} from 'react-router-3';
import MenuListNuevo from './Menu.Semana.Nuevo';
import swal from 'sweetalert'

class MenuNuevo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuNuevo : "",
      fechasSiguienteSemana:["","","","","","",""],
      name: this.props.params.name

    };
    
    this.VistaClienteNuevo = this.VistaClienteNuevo.bind(this);
    this.GuardarMenu = this.GuardarMenu.bind(this);
  }

  VistaClienteNuevo=(e)=>{
    
    browserHistory.push('/Vista/Principal/'+this.state.name);
    console.log("VISTA LISTADO CLIENTES");
    e.preventDefault();
    
  }
  GuardarMenu(menu){
    console.log("menu para guardar")
    console.log(menu);
    console.log(this.FechaProximaSemana());
    var fechas = this.FechaProximaSemana();
    console.log("fechas de la semana");
    console.log(fechas);
    var MenuNuevo = [];
    for (let i = 0; i < menu.length; i++) {
        var desayuno = {
          "idComida": 0,
          "nombre":menu[i].comidas[0].nombre,
          "descripcion":menu[i].comidas[0].descripcion,
          "numRaciones":0,
          "dia":fechas[i],
          "comidaTipo":"DESAYUNO",
          "inicioReserva": "07:00:00",
          "finReserva": "11:30:00"
        }
    
        var almuerzo = {
          "idComida":0,
          "nombre":menu[i].comidas[1].nombre,
          "descripcion":menu[i].comidas[1].descripcion,
          "numRaciones":0,
          "dia":fechas[i],
          "comidaTipo":"ALMUERZO",
          "inicioReserva": "07:00:00",
          "finReserva": "11:30:00"
        }
        var cena = {
          "idComida":0,
          "nombre":menu[i].comidas[2].nombre,
          "descripcion":menu[i].comidas[2].descripcion,
          "numRaciones":0,
          "dia":fechas[i],
          "comidaTipo":"CENA",
          "inicioReserva": "14:30:00",
          "finReserva": "16:59:59"
        }
        MenuNuevo.push(desayuno);
        MenuNuevo.push(almuerzo);
        MenuNuevo.push(cena);
    }
    console.log("array de comidas a guardar");

    console.log(JSON.stringify(MenuNuevo));
    
    //'https://tick-app-jdbc.herokuapp.com/comida/list/add'
    //'https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/list/add'
    
        fetch('https://tick-app-jdbc.herokuapp.com/comida/list/add',
      {
          headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
         },
        method: "POST",//cambiar a metodo PUT de actualizacion
         body: JSON.stringify(
           MenuNuevo
        )
        })
        .then((response) => {
          return response.json()
        })
        .then((data) => {
        console.log("DATA QUE DEVUELVE EL POST")
      console.log(data)
        })
      .catch(error => {
        swal("Error al guardar!", "", "error");
        console.error(error)
        });
    
   
    swal("Menu","guardado exitosamente","success");
    //browserHistory.push('/Vista/Principal');
  }
  FechaProximaSemana()
  {
      var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
      var Semana = ["","","","","","",""];
      
      var fecha=new Date();
      console.log("fecha");
      console.log(fecha);
      var dia = diasSemana[fecha.getDay()];
      console.log("dia");
      console.log(dia);
     
      if(dia === "Domingo"){
        var primerDia = new Date();
        for (let i = 1; i <= Semana.length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*(i));
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
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*(i));
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
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*(i));
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
      if(dia === "Miércoles"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000)*4);
        for (let i = 1; i <= Semana .length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*(i));
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
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*(i));
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
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*(i));
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
      if(dia === "Sábado"){
        var primerDia = new Date(fecha.getTime() + (24*60*60*1000));
        for (let i = 1; i <= Semana .length; i++) {
          var dia1=new Date(primerDia.getTime() + (24*60*60*1000)*(i));
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
      console.log("semana obtenida de la funcion");
      console.log(Semana);
      return Semana;
  }  
 
  render() {
    

    return (

      <div className="">
     
            <div className="row">
              <div className=" col-xs-4 margen_top">
               <h4>Menu Nuevo<i className="material-icons logo1 right z-depth-1">restaurant</i></h4>
              </div>
              <div className="col-xs-5 margen_top">  
              </div>
              <div className="col-xs-3 margen_top">  
                  <button className="waves-effect waves-light btn-large botonazul2 right"  onClick={this.VistaClienteNuevo} >Regresar<i className="material-icons right">reply</i></button>
              </div>
            </div>
          
            <hr />
            <div className="SplitPane row center-xs">
            <div className="center-xs-12">           
                <MenuListNuevo Fechas={this.GuardarMenu} />
            </div>
            <div>Menu formato json a guardar</div>
            <div>{JSON.stringify(MenuNuevo)}</div>
   </div>
    </div>
    );
  }
}

export default MenuNuevo ;