import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  //const name = "jhon";
  // let counter = 0;
  const [counter, setCounter] = useState(0);
  var [a, setA] = useState(0);
  var [val1, setV1] = useState(0);
  var [val2, setV2] = useState(0);
  const [valores, setVal] = useState({
    valor: "  ",
  });

  function Cambiar(){
    setV1(val1 = a);
    setA(a = 0);
  }

  function result(){
    setV2(val2 = a);
    setA(a = 0);
    if(valores.valor === "+"){
      setCounter(parseInt(val1) + parseInt(val2))
    }else if(valores.valor === "-"){
      setCounter(parseInt(val1) - parseInt(val2))
    }else if(valores.valor === "*"){
      setCounter(parseInt(val1) * parseInt(val2))
    }else if(valores.valor === "/"){
      setCounter(parseInt(val1) / parseInt(val2))
    }
  }
  

  return (
    <div className="App">
      <div className='resultados'>
          <h2>{parseInt(val1)} {valores.valor} {parseInt(val2)} = {counter}</h2>
          <h1>{parseInt(a)}</h1>
        </div>
          <button className="boton1"
            onClick={() => {
            setA(a = 0);
            setCounter( 0 );
            setV1(0);
            setV2(0);
            setVal((current) => ({ ...current, valor: " " }));
            }}>Clear
          </button>
          <br></br>
          <br></br>
          <button className="boton" onClick={() => {setA(a = a + "1");}}>1</button>
          <button className="boton" onClick={() => {setA(a = a + "2");}}>2</button>
          <button className="boton" onClick={() => {setA(a = a + "3");}}>3</button>
          <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "+" })); Cambiar()}}>+</button>
          <br></br>
          <button className="boton" onClick={() => {setA(a = a + "4");}}>4</button>
          <button className="boton" onClick={() => {setA(a = a + "5");}}>5</button>
          <button className="boton" onClick={() => {setA(a = a + "6");}}>6</button>
          <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "-" })); Cambiar()}}>-</button>
          <br></br>
          <button className="boton" onClick={() => {setA(a = a + "7");}}>7</button>
          <button className="boton" onClick={() => {setA(a = a + "8");}}>8</button>
          <button className="boton" onClick={() => {setA(a = a + "9");}}>9</button>
          <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "*" })); Cambiar()}}>*</button>
          <br></br>
          <button className="boton" >0</button>
          <button className="boton" onClick={() => {setA(a = a + "0");}}>0</button>
          <button className="boton" >0</button>
          <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "/" })); Cambiar()}}>/</button>
          <br></br>
          <button className="boton1" onClick={() => result()}>=</button>
    </div>
  );


}

export default App;