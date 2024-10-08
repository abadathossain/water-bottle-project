import './Bottle.css'

export default function Bottle({bottle}) {
    // console.log(bottle)
    const {name,img,price}=bottle
  return (
   <>
    <div className="bottle">
        <h3>Bottle Nmae:{name}</h3>
        <img className='bottle-img' src={img} alt="" />
        <p>Bottle Price:{price}</p>
        <button>Purchased</button>
       
    </div>
   
   </>
  )
}
