import React  from 'react';
import Moment from 'react-moment';

class FechaActual extends React.Component {

    ObtenerFecha(){
        var meses = new Array ("Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre");
        var diasSemana = new Array("Domingo","Lunes","Martes","Miércoles","Jueves","Viernes","Sábado");
        var f=new Date();
        var fechaActual = diasSemana[f.getDay()] + ", " + f.getDate() + " de " + meses[f.getMonth()] + " de " + f.getFullYear();
        return fechaActual
    }
    
    render() {
       
        return (

           <p className=" fecha margen_top"><b>{this.ObtenerFecha()}</b></p>
        );
    }
}

export default FechaActual;
//<Moment format="dddd DD MMMM YYYY" date={dateToFormat}></Moment>