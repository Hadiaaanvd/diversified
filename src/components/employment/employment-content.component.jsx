import React from "react";
import FileUpload from "../file-upload/file-upload.component";
import "./employment-content.styles.scss";

const EmploymentContent = () => {
  return (
    <div className="employment-content-component">
      <div className="positions-available">
        <div className="position-heading">Current positions available:</div>
        <div className="d-flex flex-wrap">
          <ul>
            <span>Crew foreman experienced in:</span>
            <li>Restoration of hard surfaces and landscape</li>
            <li>Horizontal Directional Drilling</li>
            <li>Excavation</li>
          </ul>
          <ul>
            <span>Operators experienced with:</span>
            <li>Excavation and Loaders</li>
            <li>Directional Drills</li>
            <li>Vacuum Excavations</li>
          </ul>
          <ul>
            <span>CDL Drivers</span>
          </ul>
        </div>
      </div>
      <div className="subtext">
        We look forward to you joining our team. Please fill out the preliminary
        application below.
      </div>
      <div className="contact-info row">
        <div className="subtext">
          <b> Preliminary Application NOTE:</b> There may NOT be an opening at
          the present time for the position for which you are applying. <br />
          Open positions are listed at&nbsp;
          <a href="EmployGeorgia.com">EmployGeorgia.com</a>.
        </div>
        <div className="contact-form  col-lg-6">
          <input type="text" placeholder="Position Applying For: *" />

          <input type="text" placeholder="First Name *" />
          <input type="text" placeholder="City of Residence *" />
          <input type="text" placeholder="Phone *" />
          <div className="radio-group">
            <p>How did you find out about this position?</p>
            <label>
              <input
                type="radio"
                name="find-position"
                value="Dept of Labor Job Site"
              />
              Dept of Labor Job Site
            </label>
            <label>
              <input type="radio" name="find-position" value="Newspaper" />
              Newspaper
            </label>
            <label>
              <input type="radio" name="find-position" value="Word of Mouth" />
              Word of Mouth
            </label>
            <label>
              <input
                type="radio"
                name="find-position"
                value="Internet Job Site"
              />
              Internet Job Site
            </label>
            <label>
              <input type="radio" name="find-position" value="Job Fair" />
              Job Fair
            </label>
          </div>
          <div className="radio-group">
            <p>Are you eligible for employment in the United States? *</p>
            <label>
              <input type="radio" name="eligible" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="eligible" value="no" />
              No
            </label>
          </div>

          <div className="radio-group">
            <p>
              Do you any relatives or friends currently employed for or have
              previously been employed by Diversified Utility Services? *
            </p>
            <label>
              <input type="radio" name="relative" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="relative" value="no" />
              No
            </label>
          </div>
          <div className="radio-group">
            <p>
              Do you have any experience in the field of natural gas or
              underground utility construction? *
            </p>
            <label>
              <input type="radio" name="experience" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="experience" value="no" />
              No
            </label>
          </div>
        </div>
        <div className="contact-info-container col-lg-6">
          <input type="text" placeholder="Location Preference: *" />
          <input type="text" placeholder="Email *" />
          <input type="text" placeholder="Last Name *" />
          <input type="text" placeholder="State of Residence *" />
          <div className="radio-group">
            <p>Are you currently employed? *</p>
            <label>
              <input type="radio" name="employed" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="employed" value="no" />
              No
            </label>
          </div>
          <div className="radio-group">
            <p>Are you at least 18 years old? *</p>
            <label>
              <input type="radio" name="years" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="years" value="no" />
              No
            </label>
          </div>
          <div className="radio-group">
            <p>Do you have a valid drivers license? *</p>
            <label>
              <input type="radio" name="license" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="license" value="no" />
              No
            </label>
          </div>
          <div className="radio-group">
            <p>
              Were you referred by a Diversified Utility Services employee to
              apply? *
            </p>
            <label>
              <input type="radio" name="reffered" value="yes" />
              Yes
            </label>

            <label>
              <input type="radio" name="reffered" value="no" />
              No
            </label>
          </div>
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
