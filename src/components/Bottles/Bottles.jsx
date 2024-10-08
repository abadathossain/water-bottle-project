import { useEffect, useState } from "react"
import Bottle from "../Bottle/Bottle"
import './Bottles.css'


export default function Bottles() {

  const [bottles,setBottles]=useState([])

  useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
  },[])
  return (
    <>
          Bottles:{bottles.length}
     <div className="bottle-container" >

      {
        bottles.map(bottle=><Bottle
           key={bottle.id}
           bottle={bottle}
           ></Bottle>)
           
      }
      
     </div>
    </>
   
  )
}
