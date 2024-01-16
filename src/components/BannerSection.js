import React from 'react'
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
function BannerSection() {
    const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1,
            slidesToSlide: 3 // optional, default to 1.
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1,
            slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1,
            slidesToSlide: 1 // optional, default to 1.
        }
    };
    return (
        <>
        
            <div className='slider-sec'>

                <Carousel

                    responsive={responsive}

                >
                    <div> 
                        <div className='row align-items-center reverse-sec'>

                        <div className='col-lg-4'>

                            <div className='popular-item-dec'>
                                <h2>New Spring Collection 2023</h2>
                                <p>Elevate your wardrobe with the new mens suits collection, featuring timeless designs
                                    with a modern twist. Crafted from premium fabrics, this collection offers a range
                                    of colors and fits to suit any occasion. Make a statement with sleek and sophisticated style.
                                </p>
                                <a href='#'>Shop Now</a>
                            </div>

                        </div>


                        <div className='col-lg-8'>


                            <div className='popolar-item-img'>
                                <img src='./ricky-2131549808.jpg'></img>
                            </div>

                        </div>


                    </div>
                    </div>


                    <div> <div className='row align-items-center reverse-sec'>

                        <div className='col-lg-4'>

                            <div className='popular-item-dec'>
                                <h2>New Spring Collection 2023</h2>
                                <p>Elevate your wardrobe with the new mens suits collection, featuring timeless designs
                                    with a modern twist. Crafted from premium fabrics, this collection offers a range
                                    of colors and fits to suit any occasion. Make a statement with sleek and sophisticated style.
                                </p>
                                <a href='#'>Shop Now</a>
                            </div>

                        </div>

                        <div className='col-lg-8'>


                            <div className='popolar-item-img'>
                                <img src='./ricky-2131549808.jpg'></img>
                            </div>

                        </div>


                    </div></div>
                    <div> <div className='row align-items-center reverse-sec'>

                        <div className='col-lg-4'>

                            <div className='popular-item-dec'>
                                <h2>New Spring Collection 2023</h2>
                                <p>Elevate your wardrobe with the new mens suits collection, featuring timeless designs
                                    with a modern twist. Crafted from premium fabrics, this collection offers a range
                                    of colors and fits to suit any occasion. Make a statement with sleek and sophisticated style.
                                </p>
                                <a href='#'>Shop Now</a>
                            </div>

                        </div>

                        <div className='col-lg-8'>

                            <div className='popolar-item-img'>
                                <img src='./ricky-2131549808.jpg'></img>
                            </div>

                        </div>


                    </div></div>
                    <div> <div className='row align-items-center reverse-sec'>

                        <div className='col-lg-4'>

                            <div className='popular-item-dec'>
                                <h2>New Spring Collection 2023</h2>
                                <p>Elevate your wardrobe with the new mens suits collection, featuring timeless designs
                                    with a modern twist. Crafted from premium fabrics, this collection offers a range
                                    of colors and fits to suit any occasion. Make a statement with sleek and sophisticated style.
                                </p>
                                <a href='#'>Shop Now</a>
                            </div>

                        </div>

                        <div className='col-lg-8'>

                            <div className='popolar-item-img'>
                                <img src='./ricky-2131549808.jpg'></img>
                            </div>

                        </div>


                    </div></div>
                </Carousel>;


            </div>

         
        </>
    )
}

export default BannerSection