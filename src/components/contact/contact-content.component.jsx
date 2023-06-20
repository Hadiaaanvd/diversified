import React from "react";
import "./contact-content.styles.scss";

const ContactContent = () => {
  return (
    <div className="contact-content-component">
      <div className="contact-info">
        <div className="contact-form">
          <div className="red subtext">
            Employment verification should be directed to{" "}
            <a href="mailto:someone@yoursite.com">payroll@dusllc.com</a>
          </div>
          {/* <h3>Meet us & we can help you</h3> */}
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
          <textarea
            type="text"
            rows={2}
            placeholder="Service Request or Inquiry"
          />
          <input
            type="text"
            placeholder="What is thirteen minus 6? (Are you a real person?)"
          />
          <button>Submit</button>
        </div>
        <div className="contact-info-container">
          {/* <h2>Contact Info</h2> */}
          <div className="subtext">
            Get in touch and we’ll get back to you as soon as we can. We look
            forward to hearing from you!
          </div>

          <div className="label">
            <i className="fa-solid fa-house"></i>
            <span className="subtext">
              Diversified Utility Services LLC 5371 Cook Rd Morrow GA 30260
            </span>
          </div>
          <div className="label">
            <i className="fa-solid fa-phone"></i>
            <span className="subtext">470.427.3655</span>
          </div>
          <div className="label">
            <i className="fa-solid fa-fax"></i>
            <span className="subtext">404.254.3391</span>
          </div>
          <div className="label">
            <i className="fa-solid fa-envelope"></i>
            <span className="subtext">info@dusllc.com</span>
          </div>
        </div>
      </div>

      <iframe
        title="location"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26582.8614329485!2d-84.322331!3d33.608997!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f4fee5612a5687%3A0x8810a6208675f6e1!2sDiversified%20Utility%20Services%20LLC!5e0!3m2!1sen!2sus!4v1687285092959!5m2!1sen!2sus"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default ContactContent;
