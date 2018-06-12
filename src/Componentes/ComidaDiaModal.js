import React from 'react';
import Modal from 'react-modal';
import { Checkbox } from 'react-bootstrap';
import swal from 'sweetalert';
import NIVELTURNO from './Data-NivelTurno';
import ACCESOS from './Data-Accesos';
import NivelTurnoList from './NivelTurno-List';
import { browserHistory } from 'react-router-3';
import TableHeaderNT  from './Table-Header-NT';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

class ComidaDiaModal extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            bloqueoEditar: true,
            bloqueoEditarDetalles:true,
            bloqueoEditarAccesos : true,
            modalComida: [],
            dia: "",
            comidaTipo: "",
            nombre: "",
            descripcion: "",
            numeroRaciones:0,
            inicioReserva:"",
            finReserva:"",
            idComida:this.props.modalComida.idComida,
            ListadoNivelTurno :[],
            accesos:[],
            booleanAccesos:[false,false,false],
            detalleComida:{},
            detalleAcceso:[],
            detalleNivelTurno:[],
            c1:false,
            c2:false,
            c3:false,
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.editar = this.editar.bind(this);
        this.editarDetalles = this.editarDetalles.bind(this);
        this.editarAccesos = this.editarAccesos.bind(this);
        this.onSubmitAccesos = this.onSubmitAccesos.bind(this);
        this.onSubmitDetalles = this.onSubmitDetalles.bind(this);
        this.data = this.data.bind(this);
        this.accesos = this.accesos.bind(this);
        this.VistaPrincipal=this.VistaPrincipal.bind(this);
        this.hola=this.hola.bind(this);
    }
  
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.modalComida !== this.props.modalComida) {
            this.VerificarFecha();
            this.setState((prevState)=>({
                dia: this.props.modalComida.dia,
                comidaTipo: this.props.modalComida.comidaTipo,
                nombre: this.props.modalComida.nombre,
                descripcion: this.props.modalComida.descripcion,
                numeroRaciones: this.props.modalComida.numRaciones,
                inicioReserva: this.props.modalComida.inicioReserva,
                finReserva: this.props.modalComida.finReserva,
                idComida : this.props.modalComida.idComida,
                bloqueoEditar:true,
                bloqueoEditarAccesos:true,
                bloqueoEditarDetalles:true
            }))
        }
    }
    VerificarFecha(){
        console.log("fecha actual");
        var hoy = new Date();
        var mm = hoy.getMonth()+1;
        var dd = hoy.getDate();
        var anio = hoy.getFullYear();
        var fechaactual = dd+'-'+mm+'-'+anio;
        var ayer= new Date(hoy.getTime() - 24*60*60*1000);
        var mmA = ayer.getMonth()+1;
        var ddA = ayer.getDate();
        var anioA = ayer.getFullYear();
        var fechaayer = ddA+'-'+mmA+'-'+anioA;
        var fechauno = new Date();
        
        //Obtenemos el array de comida
        var fechaComida = this.props.modalComida.dia;
        var espacio = "-";
        var comidaSeparada = fechaComida.split(espacio);

        //verificamos si la fecha tiene un 05 para obtener el mes sin el 0
        var mes = Array.from(comidaSeparada[1]);
            console.log("digitos del mes separados");
            console.log(mes);
            if(mes[0] == 0){
                comidaSeparada[1]=mes[1];
            }
        var dia = Array.from(comidaSeparada[2]);
            console.log("digitos del mes separados");
            console.log(dia);
            if(dia[0] == 0){
                comidaSeparada[2]=dia[1];
            }
        var a = parseInt(comidaSeparada[0]);
        var m = parseInt(comidaSeparada[1]);
        var d = parseInt(comidaSeparada[2]);
        var fechados = new Date(a,m,d);
        
        console.log("Fecha de hoy");
        console.log(fechauno);
        console.log("fecha de la comida");
        console.log(fechados);
        alert(fechaayer);

    }
    VistaPrincipal = (e) => {

        browserHistory.push('/Vista/Principal');
        console.log("VISTA MENU NUEVO");
        e.preventDefault();
    
      }
    hola = (e) => {
       alert("hola mundo");
        console.log("VISTA MENU NUEVO");
        e.preventDefault();
    
    }
    editar=(e)=>{
        swal("Edicion Nivel Turno habilitada!", "", "success");
        this.setState(()=>({bloqueoEditar : false}))
        var nros = [];
        
        //obtenemos lo nrotickets ingresado por el id de cada input desde NivelTurno-Row.js
        nros = document.getElementsByClassName("nroTickets");
        
        console.log("Numeros de tickets editados");
        for (var item of nros) {
         item.disabled=false;
         console.log(item.disabled);
        }
        e.preventDefault();
    }
    editarDetalles=(e)=>{
        swal("Edicion detalles habilitada!", "", "success");
        this.setState(()=>({bloqueoEditarDetalles : false}))
    
        
        //obtenemos lo nrotickets ingresado por el id de cada input desde NivelTurno-Row.js
        e.preventDefault();
    }
    editarAccesos=(e)=>{
        swal("Edicion accesos habilitada!", "", "success");
        this.setState(()=>({bloqueoEditarAccesos: false}))
 
        
        //obtenemos lo nrotickets ingresado por el id de cada input desde NivelTurno-Row.js
        e.preventDefault();
    }
onSubmitAccesos=(e)=>{
    var checkbox_selec=[];
    var checks=document.getElementsByClassName("checkbox1");
    var checks_normales=Array.from(checks);
    checks_normales.map((checkbox)=>{
     if(checkbox.checked){
       checkbox_selec.push(checkbox.name);
     }
    });
    console.log(checkbox_selec);
      
        swal("Cambios de accesos guardados exitosamente!", "", "success");
   
        e.preventDefault();
        
}
onSubmitDetalles=(e)=>{
        //guardamos los cambios
        
    console.log("Actualizando una comida");
      
        //Actualizamos la comida capturando los cambios realizados
         //llamamos al servicio para actualizar una comida
        fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/comida/actualizar',
        {
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        method: "PUT",//cambiar a metodo PUT de actualizacion
        body: JSON.stringify(
          {
            "idComida": this.state.idComida,
            "nombre": this.state.nombre,
            "descripcion": this.state.descripcion,
            "numRaciones": this.state.numeroRaciones,
            "dia": this.state.dia,
            "comidaTipo":this.state.comidaTipo,
            "inicioReserva":this.state.inicioReserva,
            "finReserva":this.state.finReserva
         }
          
        )
    })
    .then((response) => {
      return response.json()
      })
    .then((data) => {
      console.log("DATA QUE DEVUELVE EL PUT")
      console.log(data)
      if(data == 1){
          swal("Comida actualizada exitosamente!", "", "success");
          this.setState({ bloqueoEditarDetalles : true
            
        })
      }

      })
      .catch(error => {
          swal("Error al actualizar!", "", "error");
          console.error(error)
    });
    //--------------------------------------------------------
        console.log(this.state.nombre);
        console.log(this.state.descripcion);
        console.log(this.state.inicioReserva);
        console.log(this.state.finReserva);
        e.preventDefault();
        
}
onSubmit=(e)=>{
    
//Actualizar nivel-turno 
////Actualizamos los niveles-turno  capturando los cambios realizados
//llamamos al servicio para actualizar un nivel-turno
//Obtenemos el listado de nivel turno a enviar para actualizar
    var nros = [];
    var nroticketsingresados = [];

//obtenemos lo nrotickets ingresado por el id de cada input desde NivelTurno-Row.js
    nros = document.getElementsByClassName("nroTickets");

    console.log("Numeros de tickets editados");
    for (var item of nros) {
    nroticketsingresados.push(item.id);
    console.log("nro ticket recibido");
    console.log(item.id);

    }
    var numeros =  nroticketsingresados.map(Number);
    console.log("array de numeros");
    console.log(numeros);

//listado de nrotickets que han sido ingresados
    console.log( nroticketsingresados);
//obtenemos el listado NIVELTURNO (data de prueba por ahora)
    var NivelTurnoInicial = this.state.detalleNivelTurno;
    var NivelTurnoActualizar = [];
//Cargamos la  lista de nivel turno a enviar para actualizar
    for (let i = 0; i < NivelTurnoInicial .length; i++) {
       
          //creamos el json para enviar
          var nivelT = {
          "idNt": NivelTurnoInicial[i].idNt,
          "nivel":NivelTurnoInicial[i].nivel,
          "turno": NivelTurnoInicial[i].turno,
          "horaInicio": NivelTurnoInicial[i].horaInicio,
          "horaFin":NivelTurnoInicial[i].horaFin,
          "numTickets": numeros[i],
          "idComida": NivelTurnoInicial[i].idComida,
        
        }
        
        NivelTurnoActualizar.push(nivelT);
    }

    console.log("nivelturnoactualizado");
    console.log(NivelTurnoActualizar);
    //llamamos al servicio para actualizar el listadonivelturno de la comida

    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/nivelturno/list/actualizar',
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    method: "PUT",//cambiar a metodo PUT de actualizacion
    body: JSON.stringify(
       NivelTurnoActualizar
    )
})
.then((response) => {
  return response.json()
  })
.then((data) => {
  console.log("DATA QUE DEVUELVE EL PUT")
  console.log(data)
      console.log("data luego del put de nivel turno");
      console.log(data)
      swal("Actualizado exitosamente!", "", "success");
      
      var nros2= [];
        
        //obtenemos lo nrotickets ingresado por el id de cada input desde NivelTurno-Row.js
        nros2 = document.getElementsByClassName("nroTickets");
        
        console.log("Numeros de tickets editados");
        for (var item2 of nros2) {
         item2.disabled=true;
         console.log(item2.disabled);
        }
        this.setState(()=>({bloqueoEditar : true}))

  })
  .catch(error => {
      swal("Error al actualizar!", "", "error");
      console.error(error)
});    //
   //-------------------------------------------------------------------

        
    e.preventDefault();
}
data=(e)=> {
    console.log("id comida");
    console.log(this.state.idComida)

    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/nivelturno/listar/'+this.state.idComida)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        this.setState({ detalleNivelTurno : data})
        console.log("data nivel turno recibida")
        console.log(data);
        
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });

console.log("llegue aca")
console.log(ACCESOS);
e.preventDefault();
     
}
accesos=(e)=> {
    console.log("id comida");
    console.log(this.state.idComida)

    fetch('https://tick-app-zuul.herokuapp.com/tick-app-jdbc-client/accede/listar/'+this.state.idComida)
    .then((response) => {
    return response.json()
    })
    .then((data) => {
        this.setState({ detalleAcceso : data})
        console.log("data recibida")
        console.log(data);

        var aux = [false,false,false];
        for (let i = 0; i < data.length; i++) {
            switch(data[i].idTu){
                case 2: aux[0] = true;
                break;
                case 3: aux[1] = true;
                break;
                case 4: aux[2] = true;
                break;
            }
        
        }
        
        this.setState({ c1 :  aux[0]})
        this.setState({ c2 :  aux[1]})
        this.setState({ c3 :  aux[2]})

        
    })
    .catch(error => {
    // si hay algún error lo mostramos en consola
        console.error(error)
    });

     
  
console.log("llegue aca")
console.log(ACCESOS);
e.preventDefault();
     
}

render() {
 return (
            <div>
             
                <Modal
                    isOpen={this.props.modalOption}
                    onRequestClose={this.props.modalClearOption}
                    //contentLabel="Selected Option"
                    //closeTimeoutMS={100}
                //className="modal"
                >
                <nav>
    <div class="nav-wrapper azul">
      <a class="brand-logo espacio">Detalle comida {this.state.idComida}<i className="material-icons  right">restaurant</i> </a>
    </div>
   
  </nav>
                    <div className="margen_top">
                    <Tabs >
    <TabList className="SplitPane row TabSeleccionado">
      <Tab>Detalle</Tab>
      <Tab onClick= {this.accesos}>Accesos</Tab>
      <Tab onClick={this.data}>Nivel Turno</Tab>
    </TabList>

    <TabPanel>
    <div className="SplitPane row">
                            <p className="h2" >Detalle</p>
                             <hr />     
                        </div>
                        <div className="SplitPane row center NT">  
                            <div className="col-xs-6  margen_top ">
                                <div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Nombre: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                            <input type="text"
                                            value={this.state.nombre} 
                                            disabled={this.state.bloqueoEditarDetalles}
                                            onChange={(e)=>{ this.setState({nombre: e.target.value}) }}/>
                                    </div>
                                    </div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Descripción: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                        
                                    
                                   
                                    <input type="text"
                                            value={this.state.descripcion} 
                                            disabled={this.state.bloqueoEditarDetalles}
                                            onChange={(e)=>{ this.setState({descripcion: e.target.value}) }}/>
                                    </div>
                                    </div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Tipo de comida: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                    
                                    <input type="text"
                                            value={this.state.comidaTipo} 
                                            disabled/>
                                    </div>
                                    </div>
                                    <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>Dia: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                   
                                    <input type="text"
                                            value={this.state.dia} 
                                            disabled/>
                                    </div>
                                    </div>
                                    
                                </div>
                                
                                
                            </div>
                            <div className="col-xs-6 margen_top" >
                              <div>
                              <div className="SplitPane row left">
                                    
                                  
                                    <div className="col-xs-4  margen_top ">
                                    <label>N° Raciones: </label>
                                    </div>
                                    <div className="col-xs-8  margen_top ">
                                    
                                    <input type="text"
                                            value={this.state.numeroRaciones} 
                                            disabled/>
                                    </div>
                                    </div>
                                 <div className="SplitPane row left">
                                    
                                  
                                  <div className="col-xs-4  margen_top ">
                                  <label>Inicio-Reserva:</label>
                                  </div>
                                  <div className="col-xs-8  margen_top ">
                                  <input className="input" type="time"
                                            value={this.state.inicioReserva} 
                                            disabled={this.state.bloqueoEditarDetalles}
                                            onChange={(e)=>{ this.setState({inicioReserva: e.target.value}) }}/>
                                  </div>
                                  
                                  </div>
                                    
                                  <div className="SplitPane row left">
                                    
                                  
                                  <div className="col-xs-4  margen_top ">
                                  <label>Fin-Reserva: </label>
                                  </div>
                                  <div className="col-xs-8  margen_top ">
                                     <input type="time"
                                            value={this.state.finReserva} 
                                            disabled={this.state.bloqueoEditarDetalles}
                                            onChange={(e)=>{ this.setState({finReserva: e.target.value}) }}/>
                                  </div>
                                  </div>      
                              </div>

                            </div>
                        <div className="SplitPane row center">

                            <div className="col-xs-6 margen_top">
                            </div>
                            <div className="col-xs-6 margen_top" >
                                <button className="waves-effect waves-light btn-large botonazul2" 
                                disabled={this.state.bloqueoEditarDetalles}
                                onClick={this.onSubmitDetalles} 
                                >Guardar<i className="material-icons left">save</i>
                                </button>
                                <button 
                                    disabled={!this.state.bloqueoEditarDetalles}
                                    onClick={this.editarDetalles} 
                                    className="waves-effect waves-light btn-large botonazul2" 
                                    type="submit">Editar<i className="material-icons left">mode_edit</i>
                                    </button>
                            </div>
                            </div>
                           
                           
                        </div>
      
    </TabPanel>
    <TabPanel>
    <div className="SplitPane row">
                            <p className="h2" >Accesos</p>
                            <br/>
                            <hr />  
                          
                        </div>
                               
                        <div className="SplitPane row center NT">

                            <div className="col-xs-6  margen_top ">
                                <div>
                                   
                                    <label><input class="filled-in" value="Profesor" className="checkbox1" onChange={(e) => {this.setState({ c1: !this.state.c1 })} } name="Profesor" checked= {this.state.c1} type="checkbox" id="myCheck" disabled={this.state.bloqueoEditarAccesos} /><span>Profesor</span></label>
                                    <label><input class="filled-in" value="Alumno" className="checkbox1" onChange={(e) => {this.setState({ c2: !this.state.c2 })} } name="Alumno"  checked = {this.state.c2}  type="checkbox" id="myCheck" disabled={this.state.bloqueoEditarAccesos} /><span>Alumno</span></label>
                                    <label><input class="filled-in" value="Residente" className="checkbox1" onChange={(e) => {this.setState({ c3: !this.state.c3})} }  name="Residente" checked = {this.state.c3} type="checkbox" id="myCheck" disabled={this.state.bloqueoEditarAccesos} /><span>Residente</span></label>
                                
                                </div>
                                
                            </div>
                            <div className="SplitPane row center">

                                <div className="col-xs-6 margen_top">
                                   
                                </div>
                                <div className="col-xs-6 margen_top" >
                                    <button className="waves-effect waves-light btn-large botonazul2" 
                                        disabled={this.state.bloqueoEditarAccesos}
                                        onClick={this.onSubmitAccesos} 
                                    >Guardar<i className="material-icons left">save</i>
                                    </button> 
                                    <button 
                                        disabled={!this.state.bloqueoEditarAccesos}
                                         onClick={this.editarAccesos} 
                                        className="waves-effect waves-light btn-large botonazul2" 
                                        type="submit">Editar<i className="material-icons left">mode_edit</i>
                                    </button>
                                </div>
                            </div>

                        </div>
    </TabPanel>
    <TabPanel>
    <div className="SplitPane row">
                            <p className="h2" >Turnos</p>
                            <br/>
                            <hr />     
                        </div>
                        <div className="SplitPane row  NT center-xs">
                            <div className="  center-xs-12">
                                    <table className="total tableNT">
                                        <TableHeaderNT/>
                                        <NivelTurnoList listado ={this.state.detalleNivelTurno} />
                                    </table>  
                            </div>
                            <div className="SplitPane row center">

                            <div className="col-xs-6 margen_top">
                                
                            </div>
                            <div className="col-xs-6 margen_top" >
                            <button className="waves-effect waves-light btn-large botonazul2" 
                                disabled={this.state.bloqueoEditar}
                                onClick={this.onSubmit} 
                                >Guardar<i className="material-icons left">save</i></button>
                            <button 
                                    disabled={!this.state.bloqueoEditar}
                                    onClick={this.editar} 
                                    className="waves-effect waves-light btn-large botonazul2" 
                                    type="submit">Editar<i className="material-icons left">mode_edit</i>
                                </button>
                               
                            </div>
                            </div>
                                
                        </div>  
                       
    </TabPanel>
  </Tabs>
                        
                     
    </div>
                    <footer>
                            <hr/>
                            <div className="col-xs-12 margen_top">
                                <button 
                                onClick={this.props.modalClearOption} 
                                 className="waves-effect waves-light btn-large botonazul2 red">Cerrar<i className="material-icons left">clear</i></button>
                            </div>
                    </footer>
                </Modal>
            </div>
        )
    }
}


export default ComidaDiaModal;
