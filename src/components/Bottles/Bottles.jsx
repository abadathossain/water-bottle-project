import { useEffect, useState } from "react"


export default function Bottles() {

  const [bottles,setBottles]=useState([])

  useEffect(()=>{
    fetch('bottles.json')
    .then(res=>res.json())
    .then(data=>setBottles(data))
  },[])
  return (
    <>
     <div>
      Bottles:{bottles.length}
     </div>
    </>
   
  )
}
