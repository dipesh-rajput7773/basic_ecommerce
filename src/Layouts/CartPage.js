import React from 'react'
import { useNavigate } from 'react-router-dom'

function CartPage() {
 
    const navigate = useNavigate()

 
    const cart = JSON.parse(localStorage.getItem('cart'))||[]


   const removeProduct = (id) =>{
    const updatedCart = cart.filter(item =>item.id !== id)
    localStorage.setItem('cart',JSON.stringify(updatedCart))
    navigate('/cart')
   }

    const handleInc =(id) => {
        alert("item increment")
        const updatedCart = cart.map(item =>{
            if(item.id === item.id){
                return{
                    ...item ,  quantity: item.quantity+1
                }
            }
            return item
            })
            localStorage.setItem('cart',JSON.stringify(updatedCart))
            navigate('/cart')
    }
    const handleDec =(id) => {
        alert("item decrement")
        const updatedCart = cart.map(item =>{
            if(item.id === item.id){
                return{
                    ...item ,  quantity: item.quantity - 1
                }
            }
            return item
            })
          
            localStorage.setItem('cart',JSON.stringify(updatedCart))
            navigate('/cart')
    }
if(cart.length === 0){
    return <div>cart is empty</div>
}



  return (

//   <div>


// {
//     cart.map(((e, i) => {
//         return 
     

          
//       }))
// }

//   </div>


    <main id="cart" >
    <div className="back"><a href="#">&#11178; shop</a></div>
    <h1>Your Cart item{cart?.length}</h1>
    <div className="container-fluid" >
      <div className="row align-items-start">
        <div className="col-12 col-sm-8 items">
      
         {
            cart.map(((e,i)=>{
                return  <div className="cartItem row align-items-start">
                <div className="col-3 mb-2">
                  <img className="w-100" src={e.image} alt={e.title}/>
                </div>
                <div className="col-2 mb-2">
                  <h6 className="">{e.title}</h6>
                  <p className="pl-1 mb-0 text-uppercase">{e.category}</p>
                  <button className="pl-1 mb-0 text-uppercase" onClick={()=> removeProduct(e?.id)}>remove</button>
                  
                </div>
                <div className="col-1">
                  <p className="cartItemQuantity p-1 text-center">{e.quantity}</p>
                </div>
                <div className="col-2">
                <p className="qty">
			<label for="qty">Quantity:</label>
			<button className="qtyminus" aria-hidden="true "  onClick={()=>handleDec(e.id)}>&minus;</button>
			<input type="number" name="qty" id="qty" min="1" max="10" step="1" value={e?.quantity}/>
			<button className="qtyplus" aria-hidden="true" onClick={()=>handleInc(e.id)}>&plus;</button>
		</p>
                </div>

                <div className="col-2">
                  <p id="cartItem1Price">${e.price}</p>
                </div>
                <div className="col-2">
                  <p id="cartItem1Price">${e.price * e.quantity}</p>
                </div>
              </div>
            }))
         }
         
          
          <hr/>
        </div>
        <div className="col-12 col-sm-4 p-3 proceed form">
          <div className="row m-0">
            <div className="col-sm-8 p-0">
              <h6>Subtotal</h6>
            </div>
            <div className="col-sm-4 p-0">
              <p id="subtotal">$132.00</p>
            </div>
          </div>
          <div className="row m-0">
            <div className="col-sm-8 p-0 ">
              <h6>Tax</h6>
            </div>
            <div className="col-sm-4 p-0">
              <p id="tax">$6.40</p>
            </div>
          </div>
          <hr/>
          <div className="row mx-0 mb-2">
            <div className="col-sm-8 p-0 d-inline">
              <h5>Total</h5>
            </div>
            <div className="col-sm-4 p-0">
              <p id="total">$138.40</p>
            </div>
          </div>
          <a href="#"><button id="btn-checkout" className="shopnow"><span>Checkout</span></button></a>
        </div>
      </div>
    </div>
   
  </main>
  
  )
}

export default CartPage