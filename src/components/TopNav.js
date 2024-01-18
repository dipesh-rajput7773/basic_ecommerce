import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';

function TopNav() {

     const cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('cart')
    return (
        <>  
     
            <div className='top-head'>
                <div className='sp-offer'><a href='#'> Best special Offers 40% Off</a></div>

                <div className='logo'> Ecommerce</div>

                <div className='top-menu'>
                    <ul>
                        <li> <Link to={'/loginpage'}> <PermIdentityIcon /></Link> </li>
                        <li> <SearchIcon /></li>
                        <li> <FavoriteBorderIcon /></li>
                         <li> <Link to={'/cart'}><LocalMallIcon /></Link></li>
                    </ul>
                </div>


            </div>
       

        </>


    )
}

export default TopNav
