import "./Contact.css";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import React from "react";

function Contact() {
  return (
    <div id="contact">
      <div className="contact-container">
        <div className="get-in-touch">
          <h2 className="get-in-touch-items">Get in Touch</h2>
          <p className="get-in-touch-items">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vel porro
            laboriosam sit quidem veritatis, a sint necessitatibus ducimus
            recusandae perferendis delectus numquam aliquam, et accusamus
            consequuntur vero officia reprehenderit similique.
          </p>
          <div className="get-in-touch-items">
            <span>742 Evergreen Terrace</span>
            <span>Springfield,CR 1250</span>
          </div>
          <span className="get-in-touch-items">
            <FaPhoneAlt /> +1(555)123-4567
          </span>
          <span className="get-in-touch-items">
            <FaEnvelope /> support@gmail.com
          </span>
          <p className="get-in-touch-items">
            Looking for carrers?<a href="openings"> View all job openings</a>
          </p>
        </div>
        <div className="contact-form">
          <form action="">
            <input type="text" placeholder="Full name" className="form-items" />
            <input type="email" placeholder="Email" className="form-items" />
            <input type="number" placeholder="Phone" className="form-items" />
            <textarea
              name="message"
              id="message"
              cols="50"
              rows="10"
              placeholder="Message"
              className="form-items"
            ></textarea>
            <div className="form-items check">
              <input type="checkbox" id="check" />
              <label htmlFor="check">
                By checking this box,you agree to the{" "}
                <a href="privaccy">Privacy Policy</a> and{" "}
                <a href="cookie"> Cookie Policy</a>
              </label>
            </div>
            <button className="form-items button">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
