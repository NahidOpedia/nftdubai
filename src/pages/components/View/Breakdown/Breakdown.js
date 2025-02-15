import React,{useEffect, useState} from 'react';
import Chartgraph from '../../common/Chartgraph';
import './Breakdown.css';
// import '../../../../style/time.css'

import Time from '../../common/Time'

import AOS from 'aos';
import 'aos/dist/aos.css';
// treding icon import 

import Treding1 from "../../../../assets/cripto-walltet-icon/Ellipse 014.png";
import Treding2 from "../../../../assets/cripto-walltet-icon/Ellipse 015.png";
import Treding3 from "../../../../assets/cripto-walltet-icon/Ellipse 016.png";
import Treding4 from "../../../../assets/cripto-walltet-icon/Ellipse 017.png";
import Treding5 from "../../../../assets/cripto-walltet-icon/Ellipse 018.png";

const Breakdown = () => {

    useEffect(() => {
    
    AOS.init({duration:3000});

}, [])


    return (
        <div className="Breakdown-bg">
            <div className="graph-container">
                <div className='Breakdown-container' data-aos="fade-up">
                    <div className="title">
                        <h3>Let your Ego rest with you</h3>
                        <h1>15% Tax Breakdown</h1>

                        <div  className='chart-container'>
                        <div className="chart-view">
                                <Chartgraph/>
                        </div>
                        </div>

                        <div id="tokenomics" className="token-btn d-flex justify-content-center">
                            <button>Tokenomics</button>
                        </div>
                    </div>
                </div>

                <div className="treding-bg">                
                    <div className="treding-container">
                        <div className="treding-icon d-flex d-md-flex justify-content-between" data-aos="fade-up">
                            
                            <div className="icon-box">
                                <img src={Treding1} alt="" srcSet="" className='treading-img'/>
                                <div className="treding-text">
                                    <h3>Supply</h3>
                                    <p>1,000,000,000</p>
                                </div>
                            </div>
                            
                            <div className="icon-box">
                                <img src={Treding2} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Max Wallet</h3>
                                    <p>25,000,000,000</p>
                                </div>
                            </div>
                            <div className="icon-box">
                                <img src={Treding3} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Max Buy</h3>
                                    <p>10,000,000,000</p>
                                </div>
                            </div>
                            <div className="icon-box">
                                <img src={Treding4} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Max Sell</h3>
                                    <p>5,000,000,000</p>
                                </div>
                            </div>
                            <div className="icon-box">
                                <img src={Treding5} alt="" srcSet="" />
                                <div className="treding-text">
                                    <h3>Cool Down</h3>
                                    <p>60 Seconds</p>
                                </div>
                            </div>
                        </div>
                        <div className="treding-hour-container" data-aos="fade-up">
                            <h2>Trending Hours</h2>
                            <h1>9:30 AM - 4:00 PM EST 6:30 AM - 1:00 PM PST</h1>
                            <p className='treding-hour-container-text'>The EGO Token will operate solely during weekdays on New York Stock<br/>Exchange Hours. you can now sleep easy at night knowing that you won’t wake up to a crashed portfolio!</p>

                            <div className="time-container">
                                <h4>Token sale ends in</h4>
                                <Time/>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Breakdown;