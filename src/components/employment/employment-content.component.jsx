import React from "react";
import fax from "../../assets/fax.svg";
import phone from "../../assets/phone.svg";
import location from "../../assets/location.svg";
import logo1 from "../../assets/contact/logo1.gif";
import logo3 from "../../assets/contact/logo3.svg";
import logo4 from "../../assets/contact/logo4.png";
import logo5 from "../../assets/contact/logo5.png";
import "./contact-content.styles.scss";

const EmploymentContent = () => {
  return (
    <div className="contact-content-component">
      <div className="contact-info">
        <div className="contact-info-container">
          <h2>Contact Info</h2>
          <div className="subtext">
            If you’ve got questions or ideas you would like to share, send a
            message. For anything more specific, please use one of the addresses
            listed below.
          </div>

          <div className="subtext">
            Player and Company is an equal opportunity employer.
          </div>

          <div className="label">
            <div className="img-container">
              <img src={location} alt="" />
            </div>
            <div>
              Address
              <span className="subtext">
                531 Bishop Street N.W. Atlanta, GA 30318
              </span>
            </div>
          </div>
          <div className="label">
            <div className="img-container">
              <img src={phone} alt="" />
            </div>
            <div>
              Office
              <span className="subtext">(404) 351-3481</span>
            </div>
          </div>
          <div className="label">
            <div className="img-container">
              <img src={fax} alt="" />
            </div>
            <div>
              Fax
              <span className="subtext">(404) 355-5502</span>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Let's Talk</h2>
          <h3>Meet us & we can help you</h3>
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea type="text" placeholder="Your Message" />
          <button>Submit</button>
          <div className="subtext">
            After we get some information from you, we’ll set up a time to
            discuss your project in further detail.
          </div>
        </div>
      </div>
      <div className="assosiations">
        <div className="logo">
          <img
            src="https://www.mcaa.org/ncpwb/wp-content/uploads/sites/4/2019/12/NCPWB_logo.svg"
            alt=""
          />
        </div>
        <img src={logo5} alt="" />
        <img src={logo1} alt="" />
        <img src={logo4} alt="" />
        <div className="logo">
          <img src={logo3} alt="" />
        </div>
      </div>
      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1657.6600748450248!2d-84.4231864862442!3d33.80405033413619!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f505914031fc03%3A0x80c8403706d9febd!2s531%20Bishop%20St%20NW%2C%20Atlanta%2C%20GA%2030318!5e0!3m2!1sen!2sus!4v1682644273353!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default EmploymentContent;
