import React from "react";
import Questions from "./Question/Question";
import "./Faq.css";

function Faq() {
  return (
    <div id="faq">
      <div className="faq-container">
        <div className="about-questions">
          <h1>Frequently asked questions</h1>
          <p>Cant find the answer you are looking for?</p>
          <p>
            Reachout to our <a href="support">customer support</a> team.
          </p>
        </div>
        <div className="questions">
          <Questions />
          <Questions />
          <Questions />
          <Questions />
        </div>
      </div>
    </div>
  );
}

export default Faq;
