const getStoredCart=()=>{
    const storedCartString=localStorage.getItem('cart')
    if(storedCartString){
        return JSON.parse(storedCartString)
    }
    return []
}
const saveToCart=(cart)=>{
    const saveCart=JSON.stringify(cart)
    localStorage.setItem('cart',saveCart)
}

const addToLS=(id)=>{
    const cart=getStoredCart()
    cart.push(id)
    saveToCart(cart)
}
export{addToLS}