import React from 'react'
import MenuRow from './Cliente-Row'
import TableHeaderMenuList from './Table-Header-MenuList'

class MenuListNuevo extends React.Component {
    addNewFiltro(e) {
        e.preventDefault();
        var desayunos= [];
        var d1 = this.desayuno1.value;
        var d2=this.desayuno2.value;
        var d3 = this.desayuno3.value;
        var d4 = this.desayuno4.value;
        var d5 = this.desayuno5.value;
        var d6 = this.desayuno6.value;
        var d7 = this.desayuno7.value;
        desayunos.push(d1);
        desayunos.push(d2);
        desayunos.push(d3);
        desayunos.push(d4);
        desayunos.push(d5);
        desayunos.push(d6);
        desayunos.push(d7);
    
        console.log("desayunos ingresados");
        console.log(desayunos);
        this.props.Fechas(desayunos);
    
    }  
     render() {
        return(
        <table className=" total table ">
        <form className="margen_izq" onSubmit={(e) => this.addNewFiltro(e)}>
        <TableHeaderMenuList />
        <tbody>
          <tr>
            <td className="th1" >DESAYUNO</td>
            <td className="td1"><input ref={ ( input ) => this.desayuno1 = input } type="text" name="Desayuno1" placeholder="Nombre" /></td>
            <td className="td1"><input ref={ ( input ) => this.desayuno2 = input } type="text" name="Desayuno2" placeholder="Nombre" /></td>
            <td className="td1"><input ref={ ( input ) => this.desayuno3 = input } type="text" name="Desayuno3" placeholder="Nombre" /></td>
            <td className="td1"><input ref={ ( input ) => this.desayuno4 = input } type="text" name="Desayuno4" placeholder="Nombre" /></td>
            <td className="td1"><input ref={ ( input ) => this.desayuno5 = input } type="text" name="Desayuno5" placeholder="Nombre" /></td>
            <td className="td1"><input ref={ ( input ) => this.desayuno6= input } type="text" name="Desayuno6" placeholder="Nombre" /></td>
            <td className="td1"><input ref={ ( input ) => this.desayuno7 = input } type="text" name="Desayuno7" placeholder="Nombre" /></td>
          </tr>   
          <button  className="waves-effect waves-light btn-large botonazul2 right"type="submit">Guardar Menu<i className="large material-icons left">search</i></button>
          
          </tbody></form>
          </table>
        )
      }
}

export default MenuListNuevo