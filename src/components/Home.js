import { useState,useReducer, useEffect} from 'react';
import{Link} from 'react-router-dom';
import style from   './style1.module.css';






export default function Home(){
    const [user,setuser]=useState([]);
   var array=[];
//   function fechdata(){
const x=fetch('https://jsonplaceholder.typicode.com/todos')
x.then(function (cavab){cavab.text().then(function (netice){

    var obj=JSON.parse(netice);
    for (let i = 0; i < 20; i++){
        array.push(obj[i].id +".  title :   "+ obj[i].title)
   }
   
})
})
//setuser(array)}
  
useEffect(()=>{
 //   fechdata();
 
},[])

function bas (){
    
    setuser(array)
}
    return(
        <>
        <div className={style.box}>
        <h1> Home page</h1>
        <button className={style.btn} onClick={bas}>click</button>
        <div>
        {user.map(sec=><p> {sec}</p>)}
        </div>
        </div>
        
        
        </>
    )

}