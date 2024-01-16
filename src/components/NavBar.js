import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useState, useEffect } from 'react'


function NavBar() {


    const [category, SetCategory] = useState([])






    useEffect(() => {
        axios.get('https://fakestoreapi.com/products/categories')
            .then((results) => {
                console.log(results.data)
                SetCategory(results.data)
            })

    }, [])


    return (
        <>





            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">

                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to='/'>
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to={`/shop`}>
                                    Shop
                                </Link>
                            </li>

                            {
                                category.map((item, index) => {
                                    return <li className="nav-item" key={index}>
                                        <Link className="nav-link" to={`/category/${item}`}>
                                            {item}
                                        </Link>
                                    </li>
                                })
                            }



                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    Contacts
                                </a>
                            </li>



                        </ul>

                    </div>
                </div>
            </nav>







        </>
    )
}

export default NavBar