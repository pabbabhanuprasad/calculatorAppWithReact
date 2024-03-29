import{useState} from 'react';
function App() {
  const [calc,setCalc]=useState("");
  const[result,setResult]=useState("");
  const operations=["/","*","+","-","."];
  const updateCalc=value=>{
    if(
      operations.includes(value) && calc === '' ||
      operations.includes(value) && operations.includes(calc.slice(-1))
    ){
      return;
    }
    setCalc(calc+value);
    if(!operations.includes(value)){
      setResult(eval(calc+value).toString());
    }
  }

const createDigits=()=>{
  const digits=[];
  for(let i=9;i>=1;i--){
    digits.push(
      <button onClick={()=>updateCalc(i.toString())} key={i}>{i}</button>
    )
  }
  return digits;
}
const calculate =()=>{
  setCalc(eval(calc).toString());
}
 const deleteLast=()=>{
  if(calc == ''){
    return;
  }
  const value=calc.slice(0,-1);
  setCalc(value);
 }
 const clear=()=>{
  if(calc == ''){
    return;
  }
  const value=calc.slice(0,0);
  setCalc(value);
 }

  return (
    <div className="App">
    <div className="calculator">
      <div className="display">
        {result ?<span></span>:""}
        {calc || "0"}
      </div>
      <div className="operators">
        <button onClick={()=>updateCalc('-')}>-</button>
        <button onClick={()=>updateCalc('+')}>+</button>
        <button onClick={()=>updateCalc('/')}>/</button>
        <button onClick={()=>updateCalc('*')}>*</button>

        <button onClick={deleteLast}>DEL</button>
        <button onClick={clear}>C</button>
      </div>
      <div className="digits">
        {createDigits()}
        <button onClick={()=>updateCalc('0')}>0</button>
        <button onClick={()=>updateCalc('.')}>.</button>

        <button onClick={calculate}>=</button>
      </div>
    </div>
    </div>
  );
}

export default App;
