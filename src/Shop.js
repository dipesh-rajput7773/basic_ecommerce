import React from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useEffect, useState } from 'react'


const Shop = (props)=>{
//function Product(props) {

  function trimDescription(desc) {
    return (
      desc.length > 150 ? desc.slice(0, 150) + "..." : desc
    )
  }


  let navigate = useNavigate();
  const { id } = useParams()

  const [product, setProduct] = useState([])
       
  

  useEffect(() => {
   
    axios.get("https://fakestoreapi.com/products " )
      .then((result) => {
        //console.log(result.data)
        setProduct(result.data)
      })
      .catch((err) => {
        return navigate("/")
      })
  }, [])
  return (



    <>
      <div className='container'>
        <h2 className='category-name'> <Link className='home-route' to={`/`}>Home</Link></h2>
        <div className='row'>
          {
            product.length > 0 
            
            
            ?  product.map(((e, i) => {
              return <div className='col-lg-4 col-md-4' key={i}>
                <div className='porduct-card'>

                  <div className='product-img'><img src={e.image} alt={e.title}></img></div>
                  <div className='product-content'>
                    <h3> <Link to={`/product/${e.id}`} >{e.title}</Link> </h3>
                    <p>{trimDescription(e.description)}</p>
                    <span>${e.price}</span>
                  </div>
                </div>
              </div>
            }))


            : <span class="loader">Loading</span>

          }
        </div>

      </div >
    </>



  )
}

export default Shop