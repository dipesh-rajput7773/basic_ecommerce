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
        // ... (unchanged)
    };

    if (!singleProduct) {
        return <div>Loading...</div>;
    }

    const productUrl = window.location.href;

    return (
        <div className='single-product-page'>
            <>
                <Helmet>
                    <title>{singleProduct.title}</title>
                    <meta property="og:title" content={singleProduct.title} />
                    <meta property="og:description" content={singleProduct.description} />
                    <meta property="og:image" content={singleProduct.image} />
                    <meta property="og:url" content={productUrl} />
                    <meta property="og:type" content="product" />
                    <meta property="product:price:amount" content={singleProduct.price} />
                    {/* Add more meta tags as needed */}
                </Helmet>

                <div className='row'>
                    <div className='col-md-6'>
                        <div className='single-product-image'>
                            <img src={singleProduct.image} alt={singleProduct.title} />
                        </div>
                    </div>

                    <div className='col-md-6'>
                        <div className='single-product-details'>
                            {/* ... (unchanged) */}
                        </div>
                    </div>
                </div>

                <div>
                    {/* Facebook Share Button */}
                    <button onClick={() => handleFacebookShare(productUrl)}>
                        Share on Facebook
                    </button>
                </div>
            </>
        </div>
    );
}

export default SingleProduct;

function handleFacebookShare(url) {
    // Open Facebook share dialog
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
}
