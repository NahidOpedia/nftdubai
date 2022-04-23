import React,{useEffect} from 'react';
import './Roadmap.css';
import Correct from '../../../../assets/road map/correct-icon.png';
import BlankCorrect from '../../../../assets/road map/blank-icon.png';

import AOS from 'aos';
import 'aos/dist/aos.css';

const Roadmap = () => {

    useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
    <div className="road-map-bg" id='roadmap' data-aos="fade-up">
        <div className='road-map'>
            <h2>Road map</h2>
            <h1>Our Strategy & Project Plan</h1>
            <div className="road-map-view">
                <div className="border-wrap">
                    <div className="wrap-card-1 d-flex justify-content-between">

                        <div className="card-1">
                            <h5 className='card-title'>Feb 2022</h5>
                            <p className='card-pre-1'>Whitepaper v1.0 is released.</p>
                        </div>

                        <div className="card-2">
                            <h5 className='card-title'>March 21</h5>
                            <p className='card-pre-2'>Contract begins trading Monday – Friday from 9:30 AM – 4:00 PM EST.</p>
                        </div>

                        <div className="card-3">
                            <h5 className='card-title'>March 27</h5>
                            <p className='card-pre-3'>
                                First Monthly Financial Report will be released. An AMA will be held with the community to discuss future projects.
                            </p>
                        </div>
                    </div>





                    <div className="wrap-card-2 d-flex">
                        <div className="card-4">
                            <h5 className='card-title-4'>May 1</h5>
                            <p className='card-pre-4'>
                                Projected to list on 
our first major exchange.
                            </p>
                        </div>

                        <div className="card-5">
                            <h5 className='card-title-5'>April 21</h5>
                            <p className='card-pre-5'>
                                DApp is released and Staking for 7 days becomes live.
                            </p>
                        </div>
                    </div>



                </div>
            </div>
        </div>
    </div>
    );
};

export default Roadmap;