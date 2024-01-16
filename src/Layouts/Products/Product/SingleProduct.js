import React, { useEffect, useState } from 'react'
import { useNavigate, json, useParams } from 'react-router-dom'
import axios from 'axios';
function SingleProduct() {

    const navigate = useNavigate();
    const { id } = useParams();
    console.log(id)

    const [singleProduct, SetSingleProduct] = useState([])

    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/' + id)
            .then((results) => {
                console.log(typeof results.data)
                console.log(results.data)
                SetSingleProduct(results.data)
            })

    }, [])
    const handleCart = (singleProduct,redirect) => {
        console.log(singleProduct)
        const cart = JSON.parse(localStorage.getItem('cart')) || []
        const isProductExist = cart.find(item => item.id === singleProduct.id)

        if(isProductExist){
            const updatedCart = cart.map(item =>{
                if(item.id === singleProduct.id){
                    return{
                        ...item ,  quantity: item.quantity+1
                    }
                }
                return item
            })
            localStorage.setItem('cart',JSON.stringify(updatedCart))

        }else{
            localStorage.setItem('cart',JSON.stringify([...cart ,{...singleProduct,quantity:1}]))
        }
        alert('product added to cart')
        if(redirect){
            navigate('/cart')
        }
    }

    return (
        <div className='single-product-page'>
            <div className='row'>

                <div className='col-md-6'>
                    <div className='single-product-image'>

                        <img src={singleProduct.image}></img>

                    </div>
                </div>


                <div className='col-md-6'>
                    <div className='single-product-details'>

                        <div className='single-product-name'> {singleProduct.title} </div>
                        <div className='single-product-desc'>
                            {singleProduct.description}
                        </div>
                        <div className='single-product-price'>
                            ${singleProduct.price}
                        </div>
                        <div className='single-product-desc'>
                            {singleProduct.category}
                        </div>
                        <div className='cart'>
                            <button className='button' onClick={() => handleCart(singleProduct)}>
                                Add to Cart
                            </button>
                            <button className='button' onClick={() => handleCart(singleProduct,true)}>
                               but it now
                            </button>
                        </div>
                        {/* <div className='single-product-desc'>
                {singleProduct.rating.rate}
            </div> */}



                    </div>
                </div>


            </div>
        </div>





    )
}

export default SingleProduct