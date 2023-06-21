import React from "react";
import FileUpload from "../file-upload/file-upload.component";
import "./employment-content.styles.scss";

const EmploymentContent = () => {
  return (
    <div className="employment-content-component">
      <div className="subtext">
        We look forward to you joining our team. Please fill out the preliminary
        application below.
      </div>
      <div className="contact-info row">
        <div className="subtext">
          <b> Preliminary Application NOTE:</b> There may NOT be an opening at
          the present time for the position for which you are applying. <br />
          Open positions are listed at{" "}
          <a href="EmployGeorgia.com">EmployGeorgia.com</a>.
        </div>
        <div className="contact-form  col-lg-6">
          <input type="text" placeholder="Position Applying For: *" />

          <input
            type="text"
            placeholder="How did you find out about this position?"
          />
          <input type="text" placeholder="First Name *" />
          <input type="text" placeholder="City of Residence *" />
          <input type="text" placeholder="Phone *" />
          <input
            type="text"
            placeholder="Are you eligible for employment in the United States? *"
          />
          <input
            type="text"
            placeholder="Do you any relatives or friends currently employed for or have previously been employed by Diversified Utility Services? *"
          />
          <input
            type="text"
            placeholder="Do you have any experience in the field of natural gas or underground utility construction? *"
          />
        </div>
        <div className="contact-info-container col-lg-6">
          <input type="text" placeholder="Location Preference: *" />
          <input type="text" placeholder="Email *" />
          <input type="text" placeholder="Last Name *" />
          <input type="text" placeholder="State of Residence *" />
          <input type="text" placeholder="Are you currently employed?" />
          <input type="text" placeholder="Are you atleast 18 years old? *" />
          <input
            type="text"
            placeholder="Do you have a valid drivers license? *"
          />
          <input
            type="text"
            placeholder="Were you referred by a Diversified Utility Services employee to apply? *"
          />
        </div>
      </div>
      <FileUpload />
      <div className="col-12 mx-auto text-center">
        <button>Submit</button>
      </div>
    </div>
  );
};

export default EmploymentContent;
