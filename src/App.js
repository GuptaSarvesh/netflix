import React, { useState } from 'react';
import Contact from './Contactus';
import './App.css';
import './index.css';

import ShowCard from './Cards';
import Navbar from './Nav';
import Footer from './Footer';
import Head from './Head';
import data from './CardData';


import '../node_modules/bootstrap/dist/css/bootstrap.min.css' 
import Netflix from './Netflix';
import Amazon from './Amazon';



function App() {
 
  return (
        <>
        <Navbar />
        

        {/*
        <div className="w-full h-screen flex justify-center items-center">

        <h1 className="font-bold text 5xl text-indigo-600"> Using Tailwind CSS</h1>
        </div>
         */}
        </>
  );
}

/*
const favSeries = 'Netflix';
if (favSeries==='Netflix'){

  return(
    <>
      <Netflix />
    </>
  
  );

}
else {

  return(
    <>
    <Amazon />
    </>
  
  );
}};
// YE neeche waala tarika bhe if else k liye he h 
//{ favSeries==='Netflix' ? <Netflix /> : <Amazon />}
*/

function Shows(val) {

  return (
        <>
         <div className="col-md-3 main1">
        <ShowCard 
        key={val.id}
        imgsrc={val.imgsrc} 
        title={val.title} 
        name={val.name} 
        link={val.link} />
      </div>
        
        
        </>
  );
}



const Hooks=()=> {
  
const state= useState();
//console.log(state);
const [count,setCount]=useState(100);
console.log(count)
// useState is a funcrtion whick returns an array with 2 items [undefined,f] undefined is state object and f is updated function. Hamare case m state object jo h wo h "count"
const IncNum=()=>{
  setCount(count+1);
}
  return (
        <>
        <h1 style={{Color : 'White'}}> {count} </h1>
        <button onClick={IncNum} >Click Me</button> 
        </>
  );
}

const Eve=()=>{
  let name="Click Me";
const clrs="purple";
const[bg,setBg]=useState(clrs);
const[names,setName]=useState(name);
const bgchng=()=>{
  console.log("clicked");
  const newclrs="red";
  setBg(newclrs);
  const newName="Added";
  setName(newName);
}

  return(

    <>
    <div style={{backgroundColor:bg}}>    <button onClick={bgchng}>{names}</button> </div>
    </>
  );
}

export default App;
export {Shows,Hooks,Eve};
