import React from "react";
import "./Pricing.css";
import Titles from "./Titles/Titles";


function Pricing() {
  return (
    <div className="pricing-block">
      <div className="pricing-container">
        <div className="upper-body">
          <div className="pricing">
            <div>
              <h1>
                Everything you need for <span>$99 a month</span>
              </h1>
              <p>
                Includes every feature we offer plus unlimited projects and
                unlimited users.
              </p>
            </div>
            <div>
              <button className='button'>Get started today</button>
            </div>
          </div>

          <hr />
        </div>
        <div className="lower-body">
          <div className="left">
            <h3>EveryThing you need</h3>
            <h2>All-in-one platform</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates illo obcaecati maiores aut, libero recusandae corrupti
              rem exercitationem! Hic ipsa tempore magni? Iure, ut itaque
              cupiditate pariatur reiciendis tempore saepe?
            </p>
          </div>
          <div className="right">
            <div className="titles one">
              <Titles />
              <Titles />
              <Titles />
              <Titles />
              <Titles />
            </div>
            <div className="titles two">
              <Titles />
              <Titles />
              <Titles />
              <Titles />
              <Titles />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
