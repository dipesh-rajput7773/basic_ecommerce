 import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { Helmet } from 'react-helmet';

function SingleProduct() {
    const navigate = useNavigate();
    const { id } = useParams();
     
    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        // Fetch product data
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((results) => {
                setSingleProduct(results.data);
            });
    }, [id]);

    const handleCart = (product, redirect) => {
        console.log(singleProduct);
        const cart = JSON.parse(localStorage.getItem('cart')) || [];
        const isProductExist = cart.find(item => item.id === singleProduct.id);

        if (isProductExist) {
            const updatedCart = cart.map(item => {
                if (item.id === singleProduct.id) {
                    return {
                        ...item, quantity: item.quantity + 1
                    };
                }
                return item;
            });
            localStorage.setItem('cart', JSON.stringify(updatedCart));
        } else {
            localStorage.setItem('cart', JSON.stringify([...cart, { ...singleProduct, quantity: 1 }]));
        }

        alert('Product added to cart');
        
        if (redirect) {
            navigate('/cart');
        }
    };

    if (!singleProduct) {
        return <div>Loading...</div>;
    }

    const productUrl = window.location.href;
   
    const shouldUseLargeImageCard = singleProduct.someProperty === "someValue";




    return (
        <> 

<Helmet>
    <meta property="og:image" content={singleProduct.image} />
    <meta property="og:url" content={productUrl} />
    <meta property="og:description" content={singleProduct.description} />
    <meta property="og:title" content={singleProduct.title} /> {/* Fix here */}
    <meta name="twitter:card" content={shouldUseLargeImageCard ? "summary_large_image" : "summary"} />
    <meta name="twitter:image" content={singleProduct.image} />
    {/* Other Twitter card meta tags as needed */}
</Helmet>


        <div className='single-product-page'>
    
            <div className='row'>
                <div className='col-md-6'>
                    <div className='single-product-image'>
                        <img className='w-100' src={singleProduct.image} alt={singleProduct.title} />
                    </div>
                </div>

                <div className='col-md-6'>
                    <div className='single-product-details'>
                        <div className='single-product-name'>{singleProduct.title}</div>
                        <div className='single-product-desc'>{singleProduct.description}</div>
                        <div className='single-product-price'>${singleProduct.price}</div>
                        <div className='single-product-desc'>{singleProduct.category}</div>
                        <div className='cart'>
                            <button className='button' onClick={() => handleCart(singleProduct)}>
                                Add to Cart
                            </button>
                            <button className='button' onClick={() => handleCart(singleProduct, true)}>
                                Buy it now
                            </button>
                        </div>

                        <div>
                            {/* Facebook Share Button */}
                            <a
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(productUrl)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Share on Facebook
                            </a>
                            <a
    href={`https://twitter.com/share?url=${encodeURIComponent(productUrl)}`}
    target="_blank"
    rel="noopener noreferrer"
> Twitter
</a>

                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>

    );
}

export default SingleProduct;
