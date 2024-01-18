import React from 'react'
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import LocalMallIcon from '@mui/icons-material/LocalMall';
import { Link } from 'react-router-dom';

function TopNav() {

     

     const cart = JSON.parse(localStorage.getItem('cart')) || [];

        const badgeStyle = {
        content: `"${cart}"`,
        fontSize: '12px',
        color: '#fff',
        background: 'red',
        borderRadius: '50%',
        padding: '0 5px',
        position: 'relative',
        left: '-8px',
        top: '-10px',
        opacity: '0.9',
      };
    console.log(cart.length)
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
                       <li> <Link to={'/cart'}><LocalMallIcon style={badgeStyle}/></Link></li>
                    </ul>
                </div>


            </div>
       

        </>


    )
}

export default TopNav
