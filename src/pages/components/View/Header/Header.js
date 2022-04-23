import React,{useEffect} from 'react';
import Navber from '../../common/Navber';
import Time from '../../common/Time';
import './Header.css';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = () => {

        useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div className='header-bg'>
            <div className="container">
                <div className="header-container">
                        <Navber/> 
                    <div className="time-section">
                        <h4>Token sale ends in</h4>
                        <Time/>
                    </div>
                    <div className="header-title ">
                        <h1>A decentralized,<br/> <span>self-sustaining financial</span> organization </h1>
                        <h3>focused on securing investors’ financial freedom. </h3>
                        <div className='d-flex justify-content-center'>
                            <button className='btn-base'>Knowledge Base</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Header;