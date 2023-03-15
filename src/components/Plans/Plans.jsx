import React from 'react';
import "./Plans.css"
import {plansData} from "../../data/planData"
import whiteTick from "../../assets/whiteTick.png"
import {AiOutlineArrowRight} from "react-icons/ai"

const Plans = () => {
  return (
    <div className="plans-container">
        <div className="blur plans-blur-1"></div>
        <div className="blur plans-blur-2"></div>
        <div className="programs-header" >
            <span className='stroke-text'>READY TO START</span>
            <span>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        {/* plams called */}
        <div className="plans">
            {
                plansData.map((plan,i) =>(
                    <div className="plan" key={i}>
                        {plan.icon}
                        <span>{plan.name}</span>
                        <span>$ {plan.price}</span>

                        <div className="features">
                            {
                                plan.features.map((feature,i) => (
                                    <div className="feature">
                                        <img src={whiteTick} alt="" />
                                        <span key={i}>{feature}</span>
                                    </div>
                                ))}
                        </div>

                        <div>
                            <span>see more benefits <AiOutlineArrowRight /> </span>
                        </div>
                        <button className="btn">Join Now</button>
                    </div>
                ))}
        </div>
    </div>
  );
};

export default Plans;