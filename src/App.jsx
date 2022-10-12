import './App.css'
import {useState} from "react"
export default function App() {
  const [calc,setCalc]= useState("");
  const [result,setResult]= useState("");

  const oprts= ['/','*','+','-','.'];
  const updateCalc= value=>{
    if(
      oprts.includes(value) && calc=== '' ||
      oprts.includes(value) && oprts.includes(calc.slice(-1))
    )
    {
      return;
    }
    setCalc(calc+ value);

    if (!oprts.includes (values)){
      setResult(eval(calc + value). toString());
    }
  }
    
  
  const createDigits= ()=>{
    const digits = [];

    for (let i=1; i<10; i++){
      digits.push(
         <button 
           onClick={() => updateCalc(i.toString())}key={i}>
           {i}
         </button> 
      )
    }
    return digits;
  }

  const calculate=()=>{
    setCalc(eval(calc).toString());
  }
  const deleteDigit=()=>{
    if (calc==''){
      return;
    }
    const value= calc.slice(0,-1);
    setCalc(value);
    
  }

  
  return (
    <main className='App'>
      <h1 className='app-title'>REACT CALCULATOR</h1>
      <div className='calculator'>
        <div className='display'>
          {result ? <span>(result)</span> : ''} 
          {calc || "0"}
        </div>

        <div className='operators'>
         <button onClick={() => updateCalc('/')}>/</button>
         <button onClick={() => updateCalc('*')}>*</button>
         <button onClick={() => updateCalc('+')}>+</button>
         <button onClick={() => updateCalc('-')}>-</button>
         
         
         <button onClick={deleteDigit}>DEL</button>
        </div>
        
        <div className='digits'>
          {createDigits()}
         <button onClick={() => updateCalc('0')}>0</button>
         <button onClick={() => updateCalc('.')}>.</button>
         
          <button onClick={calculate}>=</button>
        </div>
        
      </div>
      
    </main>
  )
    }