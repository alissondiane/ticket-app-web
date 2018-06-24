import React from 'react'

class Buscar extends React.Component {
  addNewFiltro(e) {
    e.preventDefault();
    var codigos= this.codigo.value;

    if(!codigos){
      alert("Ingrese código a buscar");
    }else{
      var codigoBuscar = {codigo: codigos}
      this.props.Busqueda( codigoBuscar);
    }
    
}

  render() {
    return(
      <form onSubmit={(e) => this.addNewFiltro(e)}>
         <div className="SplitPane row">
            <div className="col-xs-6 margen2">
            <input ref={ ( input ) => this.codigo = input } type="text" maxlength="100" placeholder="Código" /> 
            </div>
            <div className="col-xs-6 margen2">
              <button  className="waves-effect waves-light btn-large boton center"type="submit">Buscar<i className="large material-icons left">search</i></button>
            </div>
         </div>
        
        
        
      </form>
    )
  }
}

export default Buscar