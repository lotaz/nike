import React from 'react';
import './HeaderNike.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { pathRoute } from '../../route/Path';
export default function HeaderNike() {
    return (
        <div>
            <div className='background'>
                <div className='header'>
                    <div>
                        <img src={'/img/logoNike/jordan.jpg '} alt="" style={{ width: '15px', height: '20px' }} />
                    </div>
                    <div className='header-option'>
                        <span className='header-option-choose'>Find a Store</span>
                        <span>|</span>
                        <span className='header-option-choose'>Help</span>
                        <span>|</span>
                        <span className='header-option-choose'>Join Us</span>
                        <span>|</span>
                        <Link to={pathRoute.LOGIN} style={{textDecoration:'none',color:'black'}}> <span className='header-option-choose' >Sign In</span></Link>
                    </div>
                </div>
            </div>
            <div className='secondNavbar'>
                <div >
                   <Link to={pathRoute.HOME}><img className='secondNavbar-img' src={'/img/logoNike/nikeLogo.jpg '} alt="" style={{ width: '70px', height: '55px', cursor: 'pointer' }} /></Link> 
                </div>
                <div className='secondNavbar-option'>
                    <span>New & Feature</span>
                    <span>Men</span>
                    <span>Woman</span>
                    <span>Kids</span>
                    <span>Sale</span>
                    <span>SNKRS</span>
                </div>
                <div className='secondNavbar-shopping'>
                    <div className='searching'>
                        <div class="search-bar">
                            <a href="" className="search-icon">🔍</a>
                            <input type="text" class="search-input" placeholder="Search" />
                        </div>
                    </div>
                    <span className='secondNavbar-shopping-love'>🤍</span>
                    <span className='secondNavbar-shopping-cart'>🛒</span>
                </div>
            </div>

        </div>
    )
}
