import './App.css';
import Numbers from './components/Numbers';
import {useState,useEffect} from 'react'
import numbersData from './numbersData';
import Confetti from 'react-confetti'
function App() {
  function randomNum(){
    return Math.floor(Math.random()*9)
} 
  const [catchN,setCathcN] = useState(JSON.parse(localStorage.getItem('nums'))||numbersData);
  let countainer = catchN;
  function catchNum(e){
    e.preventDefault();
    e.target.style.backgroundColor = "#59E391";
    for(let i =0;i<countainer.length;i++){
      if(+e.target.id === countainer[i].id){
        countainer[i].state=true;
        countainer[i].text=e.target.textContent 
      }
    }
    const filterState = countainer.filter((num)=>num.state === true);
    if(!filterState.every((num)=> num.text === e.target.textContent)){
      e.target.textContent = "ops!";
      e.target.style.backgroundColor = "red";
      setTimeout(clearStorage(),5000);
    }
    else{
      e.target.textContent = "ok";
    }
  }
  const [roll,setRoll] = useState(false);
  const [btn,setBtn] = useState("Roll")
  function rollBtn(){
    setRoll((prevMode)=>!prevMode);
    setCathcN(countainer)
    localStorage.setItem('nums',JSON.stringify(countainer));
  }

  function clearStorage(){
    localStorage.clear();
    setCathcN(numbersData);
    window.location.reload(false);
  }
  const [celebration,setCelebration] = useState(false);
  useEffect(()=>{
    const trues = catchN.every((ele)=>ele.state === true);
    trues? setBtn("Rester Game") : setBtn("Roll");
    setCelebration(trues);
  })
  return (
    <div className="App">
      <main>
        {celebration&&<Confetti/>}
        <h1>Tenzies</h1>
        <p>Roll until all dice are the same. Click each die to freeze it at its current value between rolls.</p>
        <Numbers randomNum={randomNum} catchNum={catchNum} catchN={catchN} setCathcN={setCathcN}/>
        <button className='roll' onClick={btn === "Rester Game"? clearStorage: rollBtn}>{btn}</button>
      </main>
    </div>
  );
}

export default App;
