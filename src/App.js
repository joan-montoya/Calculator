import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

function App() {
  //const name = "jhon";
  // let counter = 0;
  const [counter, setCounter] = useState(0);
  var [a, setA] = useState(0);
  var [b, setB] = useState(0);
  const [valores, setVal] = useState({
    valor: "  ",
  });

  function result(){
    if(valores.valor === "+"){
    setCounter(parseInt(a) + parseInt(b))
    }else if(valores.valor === "-"){
      setCounter(a - b)
    }else if(valores.valor === "*"){
      setCounter(a * b)
    }else if(valores.valor === "/"){
      setCounter(a / b)
    }
  }
  

  return (
    <div className="App">
      <h1>{parseInt(a)} {valores.valor} {parseInt(b)}</h1>
      <h1>Resultado: {counter}</h1>
      <div className='operadores'>
        <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "+" })); }}>+</button>
        <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "-" })); }}>-</button>
        <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "*" })); }}>*</button>
        <button className="boton" onClick={() => { setVal((current) => ({ ...current, valor: "/" })); }}>/</button>
      </div>

      <div className='igual'>
        <button className="boton1" onClick={() => result()}>=</button>
      </div>

      <div className='clear'>
        <button className="boton2"
        onClick={() => {
          setA(a = 0);
          setB(b = 0);
          setCounter( 0 )
          setVal((current) => ({ ...current, valor: " " }));
          }}>Limpiar</button>
      </div>
      
      <br></br>

      <div className='container'>
        <div className="operando1">
          <h2>Operando 1</h2>
          <button className="boton" onClick={() => {setA(a = a + "1");}}>1</button>
          <button className="boton" onClick={() => {setA(a = a + "2");}}>2</button>
          <button className="boton" onClick={() => {setA(a = a + "3");}}>3</button>
          <br></br>
          <button className="boton" onClick={() => {setA(a = a + "4");}}>4</button>
          <button className="boton" onClick={() => {setA(a = a + "5");}}>5</button>
          <button className="boton" onClick={() => {setA(a = a + "6");}}>6</button>
          <br></br>
          <button className="boton" onClick={() => {setA(a = a + "7");}}>7</button>
          <button className="boton" onClick={() => {setA(a = a + "8");}}>8</button>
          <button className="boton" onClick={() => {setA(a = a + "9");}}>9</button>
          <br></br>
          <button className="boton" >0</button>
          <button className="boton" onClick={() => {setA(a = a + "0");}}>0</button>
          <button className="boton" >0</button>
          <br></br>
        </div>
        <div className="operando2">
        <h2>Operando 2</h2>
          <button className="boton" onClick={() => {setB(b = b + "1");}}>1</button>
          <button className="boton" onClick={() => {setB(b = b + "2");}}>2</button>
          <button className="boton" onClick={() => {setB(b = b + "3");}}>3</button>
          <br></br>
          <button className="boton" onClick={() => {setB(b = b + "4");}}>4</button>
          <button className="boton" onClick={() => {setB(b = b + "5");}}>5</button>
          <button className="boton" onClick={() => {setB(b = b + "6");}}>6</button>
          <br></br>
          <button className="boton" onClick={() => {setB(b = b + "7");}}>7</button>
          <button className="boton" onClick={() => {setB(b = b + "8");}}>8</button>
          <button className="boton" onClick={() => {setB(b = b + "9");}}>9</button>
          <br></br>
          <button className="boton" >0</button>
          <button className="boton" onClick={() => {setB(b = b + "0");}}>0</button>
          <button className="boton" >0</button>
          <br></br>
        </div>
      </div>
      

    </div>
  );


}

export default App;