import React from "react";
import "./PageFooter.css";

function PageFooter() {
  return (
    <div className="page-footer">
      <div className="page-footer-container">
        <div className="departments">
          <div className="block">
            <p className="heading">Solutions</p>
            <a href="marketing">Marketing</a>
            <a href="analytics">Analytics</a>
            <a href="commerce">Commerce</a>
            <a href="insights">Insights</a>
          </div>
          <div className="block">
            <p className="heading">Support</p>
            <a href="pricing">Pricing</a>
            <a href="documentation">Documentation</a>
            <a href="guides">Guides</a>
            <a href="apiStatus">API Status</a>
          </div>
          <div className="block">
            <p className="heading">Company</p>
            <a href="about">About</a>
            <a href="blog">Blog</a>
            <a href="jobs">Jobs</a>
            <a href="press">Press</a>
          </div>
          <div className="block">
            <p className="heading">Legal</p>
            <a href="claim">Claim</a>
            <a href="privacy">Privacy</a>
            <a href="cookies">Cookies</a>
            <a href="terms">Terms</a>
          </div>
        </div>
        <div className="subscriptions">
          <p className="heading">Subscribe to our newsletter.</p>
          <p>The latest news,articles,blogs about company.</p>
          <div className="subscribe">
            <input type="email" placeholder="Email" />
            <button className='button' >Subscribe</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageFooter;
