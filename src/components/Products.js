import { useState,useReducer, useEffect,useRef} from 'react';
import{Link} from 'react-router-dom';
import style from   './style1.module.css';

//import './style.css'




export default function Products(props){
    const [id,setid]=useState([1]);
    const [item,setitem]=useState([]);
    const [btn,setbtn]=useState(0)
   
   
  const  inpRef={useRef};
  //const id=Number(inpRef.current.value);
    var array_esas=[];
    var array_elave=[];
 const x=fetch('https://dummyjson.com/carts')
 x.then(function (cavab){cavab.text().then(function (netice){
 
     var obj=JSON.parse(netice);
     console.log(obj.carts.length)
     for (let i = 0; i <5; i++){
       array_elave.push(obj.carts[id].products[i].title);
   
    array_elave.push(obj.carts[id].products[i].price)
       array_elave.push(obj.carts[id].products[i].thumbnail);
        array_esas.push(array_elave);
      array_elave=[];
   }
     
console.log(array_esas);

 })})
 function click_et(){
    setid(Number(inpRef.current.value));
    console.log(inpRef.current.value);
    setitem(array_esas);
 }
 function basin(a){
    console.log(a)
 }

    return(
        <>
        <div className={style.box}>
        <h1>Products page</h1>
        <input ref={inpRef}></input>
        <button className={style.btn} onClick={click_et}> click </button>
        <div className={style.box_main}>
        {item.map(sec=>
        <div className={style.box_product}>
            <p>{sec[0]}</p>
            <p>{sec[1]}</p>
            <img className={style.img_product} src={sec[2]} ></img>
            {/* <button onClick={basin}>basin</button> */}
          
        </div>
        
        )}
        </div>
        </div>
        </>
    )

}