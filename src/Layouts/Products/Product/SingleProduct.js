import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function SingleProduct() {
    const navigate = useNavigate();
    const { id } = useParams();

    const [singleProduct, setSingleProduct] = useState(null);

    useEffect(() => {
        // Fetch product data
        axios.get(`https://fakestoreapi.com/products/${id}`)
            .then((results) => {
                setSingleProduct(results.data);
                updateMetaTags(results.data);
            });
    }, [id]);

    const updateMetaTags = (product) => {
        const ogUrl = window.location.href;
        const ogImage = product.image;
        const ogTitle = product.title;
        const ogDescription = product.description;

        // Update Open Graph meta tags dynamically
        document.head.querySelector('meta[property="og:url"]').content = ogUrl;
        document.head.querySelector('meta[property="og:image"]').content = ogImage;
        document.head.querySelector('meta[property="og:title"]').content = ogTitle;
        document.head.querySelector('meta[property="og:description"]').content = ogDescription;
    };

    const handleCart = (product, redirect) => {
        // ... (unchanged)
    };

    if (!singleProduct) {
        return <div>Loading...</div>;
    }

    return (
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
                                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Share on Facebook
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SingleProduct;
