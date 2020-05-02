import React, { Fragment, useState, useEffect } from 'react';
import Header from './components/Header';
import Formulario from './components/Formulario';
import ListadoNoticias from './components/ListadoNoticias';


function App() {

  //denifir la categoria de noticias a buscar 
  const [categoria, guardarCategoria] = useState('');
  const [noticias, guardarNoticias] = useState([]);

  useEffect(() => {
    const consultarApi = async () => {
      const url = `http://newsapi.org/v2/top-headlines?country=co&category=${categoria}&apiKey=db73a6ce5ba5483bbb9da732ae5d8950`;
      const resultado = await fetch(url);
      const noticias = await resultado.json();
      guardarNoticias(noticias.articles);
      console.log(noticias.articles);

    }
    consultarApi();
  }, [categoria]);

  return (
    <Fragment>
      <Header
        titulo='Buscador de Noticias'
      />
      <div className="container white">
        <Formulario
          guardarCategoria={guardarCategoria}
        />
        <ListadoNoticias
          noticias={noticias}
        />
      </div>
    </Fragment>
  );
  //db73a6ce5ba5483bbb9da732ae5d8950
}

export default App;
