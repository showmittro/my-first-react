import logo from './logo.svg';
import './App.css';

function App() {
  const nayoks =["Rubel", "BappaRaz", "Kuber", "Jashim", "Salman Shah","Razzak","Riyaz"];
  return (
    <div className="App">
      {
        nayoks.map(nayok => <li>Name: {nayok}</li>)
      }

      {
        nayoks.map(nayok => <Person name={nayok}></Person>)
      }
      {/* <Person name={nayoks[0]} nayka="Mousomi"></Person>
      <Person name={nayoks[1]} nayka = "cheka"></Person>
      <Person name="Kuber" nayka ="kopila"></Person>
      <Friend name= "Rumon" nayka="oxyzen"></Friend> */}
      <Friend></Friend>
      <Friend></Friend>
    </div>
  );
}

function Person (props){
  return (
      <div className='person'>
        <h1>{props.name}</h1>
        <p>{props.nayka}</p>
      </div>
  )
  
}

function Friend (props){
  return(
    <div className='person'>
      <h1>{props.name}</h1>
      <p>Nayka:{props.nayka}</p>
    </div>
  )
}



export default App;
