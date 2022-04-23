import React,{useEffect} from 'react';
import './Specialities.css';

// /import images 

import AOS from 'aos';
import 'aos/dist/aos.css';

import risk from '../../../../assets/special-icon/risk2.png'
import vote from '../../../../assets/special-icon/vote 2.png'
import Group from '../../../../assets/special-icon/Group.png'
const Specialities = () => {

        useEffect(() => {
    
    AOS.init({duration:3000});

}, [])

    return (
        <div>
            <div className="special-container" data-aos="fade-up">
                <h1 className='special-title'>Our Specialities</h1>
                <h2 className='special-subtitle'>Let us know  you how we operate</h2>

                <div className="special-card-container special-bg">

                    <div className="card-box-container d-flex justify-content-between">



                        <div className="card-content align-items-center">
                            
                            <img src={risk} alt="" srcSet="" />

                            <div className='card-content-text'>
                                <h2 className='special-algin'>Managed Risk</h2>
                                <p className='card-content-pre-2'>One of the most nerve-wracking things in the crypto world is constantly worrying if the project will deliver on its promises. Rest assured, we always do our own research and initiate a community vote before. . . .
                                </p>
                            </div>
                            <div className="text-center"><i className="fa-solid fa-arrow-right right-icon-pre"></i></div>
                        </div>



                        <div className="card-content-2">

                            <img src={vote} alt="" srcSet="" />

                            <div className='card-content-text'>
                                <h2 className='special-algin'>voting Power</h2>
                                <p className='card-content-pre'>Community members who have staked their $EGO for at least 7 days will unlock voting powers for the upcoming community votes. As the project grows older , investors will need  to stake for a longer period  . . .</p>
                            </div>
                            <div className="text-center"><i className="fa-solid fa-arrow-right right-icon-pre"></i></div>
                        </div>



                        <div className="card-content-3">
                            
                            <img src={Group} alt="" srcSet="" />

                            <div className='card-content-text'>
                                <h2 className='special-algin'>Transparency</h2>
                                <p className='card-content-pre-2'>Building trust in the cryptocurrency space requires transparency and truth. Every Sunday,  join us for our weekly AMA where we go over the financial reports for the week prior, plan out next   investments . . . . . . . .</p>
                            </div>
                            <div className="text-center"><i className="fa-solid fa-arrow-right right-icon-pre"></i></div>

                            
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default Specialities;