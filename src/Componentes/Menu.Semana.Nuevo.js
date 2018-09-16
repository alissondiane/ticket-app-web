import React from 'react'

class MenuListNuevo extends React.Component {
    addNewFiltro(e) {
        e.preventDefault();
        var Menu = [];
    
        var d1 = this.desayuno1.value;
        var d2=this.desayuno2.value;
        var d3 = this.desayuno3.value;
        var d4 = this.desayuno4.value;
        var d5 = this.desayuno5.value;
        var d6 = this.desayuno6.value;
        var d7 = this.desayuno7.value;

        var a1 = this.almuerzo1.value;
        var a2=this.almuerzo2.value;
        var a3 = this.almuerzo3.value;
        var a4 = this.almuerzo4.value;
        var a5 = this.almuerzo5.value;
        var a6 = this.almuerzo6.value;
        var a7 = this.almuerzo7.value;

        var c1 = this.cena1.value;
        var c2=this.cena2.value;
        var c3 = this.cena3.value;
        var c4 = this.cena4.value;
        var c5 = this.cena5.value;
        var c6 = this.cena6.value;
        var c7 = this.cena7.value;

        
        var dd1 = this.descripcionD1.value;
        var dd2=this.descripcionD2.value;
        var dd3 = this.descripcionD3.value;
        var dd4 = this.descripcionD4.value;
        var dd5 = this.descripcionD5.value;
        var dd6 = this.descripcionD6.value;
        var dd7 = this.descripcionD7.value;

        var aa1 = this.descripcionA1.value;
        var aa2=this.descripcionA2.value;
        var aa3 = this.descripcionA3.value;
        var aa4 = this.descripcionA4.value;
        var aa5 = this.descripcionA5.value;
        var aa6 = this.descripcionA6.value;
        var aa7 = this.descripcionA7.value;

        var cc1 = this.descripcionC1.value;
        var cc2=this.descripcionC2.value;
        var cc3 = this.descripcionC3.value;
        var cc4 = this.descripcionC4.value;
        var cc5 = this.descripcionC5.value;
        var cc6 = this.descripcionC6.value;
        var cc7 = this.descripcionC7.value;

        var lunes = {
          comidas : [
             {nombre: d1, descripcion: dd1},
             {nombre: a1, descripcion: aa1},
             {nombre: c1, descripcion: cc1}
          ]
        };
        var martes = {
          comidas : [
            {nombre: d2, descripcion: dd2},
            {nombre: a2, descripcion: aa2},
            {nombre: c2, descripcion: cc2}
         ]
        };
        var miercoles ={
          comidas : [
            {nombre: d3, descripcion: dd3},
            {nombre: a3, descripcion: aa3},
            {nombre: c3, descripcion: cc3}
         ]
        };
        var jueves = {
          comidas : [
            {nombre: d4, descripcion: dd4},
            {nombre: a4, descripcion: aa4},
            {nombre: c4, descripcion: cc4}
         ]
        };
        var viernes = {
          comidas : [
            {nombre: d5, descripcion: dd5},
            {nombre: a5, descripcion: aa5},
            {nombre: c5, descripcion: cc5}
         ]
        };
        var sabado= {
          comidas : [
            {nombre: d6, descripcion: dd6},
            {nombre: a6, descripcion: aa6},
            {nombre: c6, descripcion: cc6}
         ]
        };
        var domingo = {
          comidas : [
            {nombre: d7, descripcion: dd7},
            {nombre: a7, descripcion: aa7},
            {nombre: c7, descripcion: cc7}
         ]
        };
        Menu.push(lunes);
        Menu.push(martes);
        Menu.push(miercoles);
        Menu.push(jueves);
        Menu.push(viernes);
        Menu.push(sabado);
        Menu.push(domingo);
    
        console.log("Menu  ingresados");
        console.log(Menu);
        this.props.Fechas(Menu);
    
    }  
     render() {
        return(
        

        <form  onSubmit={(e) => this.addNewFiltro(e)}>
        <table className=" total table">
          <thead>
			        <tr>      
                <th></th>    
                <th className="th1">LUNES</th>           
                <th className="th1">MARTES</th>
                <th className="th1">MIÉRCOLES</th>
                <th className="th1">JUEVES</th>
                <th className="th1">VIERNES</th>
                <th className="th1">SÁBADO</th>
                <th className="th1">DOMINGO</th>
              </tr>
	        </thead>
          <tbody>
            <tr>
              <td className="th1" >DESAYUNO</td>

              <td className="td1">
              <textarea className = "textareaNombre" ref={ ( input ) => this.desayuno1 = input } type="text" name="Desayuno1" placeholder="Nombre" />
              <textarea className = "textarea"  ref={ ( input ) => this.descripcionD1 = input } type="text" name="Desayuno1" placeholder="Descripción" />
              </td>

              <td className="td1">
              <textarea className = "textareaNombre" ref={ ( input ) => this.desayuno2 = input } type="text" name="Desayuno1" placeholder="Nombre" />
              <textarea className = "textarea"  ref={ ( input ) => this.descripcionD2 = input } type="text" name="Desayuno1"placeholder="Descripción"/>
               </td>

              <td className="td1">
              <textarea className = "textareaNombre" ref={ ( input ) => this.desayuno3 = input } type="text" name="Desayuno1" placeholder="Nombre" />
              <textarea className = "textarea"  ref={ ( input ) => this.descripcionD3 = input } type="text" name="Desayuno1" placeholder="Descripción"/>
              </td>

              <td className="td1">
              <textarea className = "textareaNombre"  ref={ ( input ) => this.desayuno4 = input } type="text" name="Desayuno1" placeholder="Nombre" />
              <textarea  className = "textarea" ref={ ( input ) => this.descripcionD4 = input } type="text" name="Desayuno1" placeholder="Descripción" />
              </td>

              <td className="td1">
              <textarea className = "textareaNombre" ref={ ( input ) => this.desayuno5 = input } type="text" name="Desayuno1" placeholder="Nombre" />
              <textarea className = "textarea"  ref={ ( input ) => this.descripcionD5 = input } type="text" name="Desayuno1" placeholder="Descripción" />
              </td>

              <td className="td1">
              <textarea className = "textareaNombre" ref={ ( input ) => this.desayuno6 = input } type="text" name="Desayuno1" placeholder="Nombre" />
              <textarea  className = "textarea" ref={ ( input ) => this.descripcionD6 = input } type="text" name="Desayuno1" placeholder="Descripción" />
              </td>

              <td className="td1">
              <textarea className = "textareaNombre"  ref={ ( input ) => this.desayuno7 = input } type="text" name="Desayuno1" placeholder="Nombre" />
              <textarea  className = "textarea" ref={ ( input ) => this.descripcionD7 = input } type="text" name="Desayuno1" placeholder="Descripción" />
              </td>
            
          </tr> 
          <tr>
            <td className="th1" >ALMUERZO</td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.almuerzo1 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionA1 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.almuerzo2 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionA2 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.almuerzo3 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionA3 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.almuerzo4 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionA4 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.almuerzo5= input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionA5 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.almuerzo6 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionA6 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.almuerzo7 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionA7 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
          </tr>


          <tr>
            <td className="th1" >CENA</td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.cena1 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea" ref={ ( input ) => this.descripcionC1 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.cena2 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea" ref={ ( input ) => this.descripcionC2 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea  className = "textareaNombre" ref={ ( input ) => this.cena3 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionC3 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea  className = "textareaNombre" ref={ ( input ) => this.cena4 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea  className = "textarea" ref={ ( input ) => this.descripcionC4 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea  className = "textareaNombre" ref={ ( input ) => this.cena5 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea  className = "textarea" ref={ ( input ) => this.descripcionC5 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea  className = "textareaNombre" ref={ ( input ) => this.cena6 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea className = "textarea"  ref={ ( input ) => this.descripcionC6 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>
            <td className="td1">
            <textarea className = "textareaNombre" ref={ ( input ) => this.cena7 = input } type="text" name="Desayuno1" placeholder="Nombre" />
            <textarea  className = "textarea" ref={ ( input ) => this.descripcionC7 = input } type="text" name="Desayuno1" placeholder="Descripción" />
            </td>

          </tr>
          
          </tbody>
         
          
          </table>
          <div className="SplitPane row">
            <div className="col-xs-7 margen_top">
            <button  className="waves-effect waves-light btn-large botonazul2 right"type="submit">Guardar<i className="material-icons left">save</i></button>
            </div>
            <div className="col-xs-7 margen_top">
            </div>
          </div>
          </form>
          
        )
      }
}

export default MenuListNuevo