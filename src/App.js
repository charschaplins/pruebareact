import './App.css';

import  { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navbar  from './componentes/navbar/Navbar';
import Inicio from './componentes/paginas/Inicio';
import Favoritos from './componentes/paginas/Favoritos';
import React, {useState,useEffect} from 'react';

 const NUM_PAG =1 ;

function App() {


      /**
       * inicializar el estado interno de nuestro componente nos devuleve una lista
       */
        const [personaje, setPersonaje]=useState([]);
        const [loading,setLoanding]=useState(true);
        const [pagina, setPagina] = useState(NUM_PAG);
  

      /**
       * Async toma como argumento devuelve la funcion promesa.
       * await hace que JavaScript espere hasta que la promesa responda y devuelve su resultado.
       * fetch manipula parte del canal HTTP
       */
          useEffect( ()=>{
                     
                  async function fetchPersonaje(){ 
                      let respuesta = await fetch(`https://swapi.dev/api/people/?page=${pagina}&size=5`); 
                      let data = await respuesta.json();
                      setPersonaje(data.results);
                  }
                
               

                  fetchPersonaje();
                  setLoanding(false);

          },[pagina])
           

      const scrollToEnd=() => {
      setPagina(pagina+1);
    }      

     window.onscroll =function(){

      if(
          window.innerHeight + document.documentElement.scrollTop
          === document.documentElement.offsetHeight
      ){
        scrollToEnd()
      }

     
    }
     

  return (
    <div className="App">
      {/* Ruteo para navegar entre paginas */}
    <Router>


      <Navbar/>
        {loading ? (
          <div active inverted className="spinner-border" role="status">
            <span inverted className="visually-hidden"> Loading ...</span>
          </div>
        ):(

          <Switch>

          <Route path='/home' exact component={Inicio}> 
          <Inicio data={personaje}/>
          </Route>
          <Route path='/favoritos' exact component={Favoritos}> 
          <Favoritos data={personaje}/>
          </Route>
          
          </Switch>


        ) }
    </Router>

    </div>
  );
}

export default App;
