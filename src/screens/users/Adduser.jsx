import React from 'react'
import './UserTable.scss';
import { Link } from 'react-router-dom';
const Adduser = () => {
  return (
    <div>

      <h2 class="area-top-title">View</h2>
      <div className='btn-right'>
        <Link to='/usertable' className="btn">
        User Details
        </Link>
      </div>
      <section className="content-area-table1">
        <div className="container">
          <form action="submit">
              <div class="form first">
                  <div class="details personal">

                      <div class="fields">
                          <div class="input-field">
                              {/* <label>Full Name</label> */}
                              <input type="text" placeholder="Enter your name" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>Date of Birth</label> */}
                              <input type="date" placeholder="Enter birth date" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>Email</label> */}
                              <input type="email" placeholder="Enter your email" id="email" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>Mobile Number</label> */}
                              <input type="number" placeholder="Enter mobile number" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>Gender</label> */}
                              <input type="date" placeholder="Enter your gender" required/>
                          </div>
                          
                          <div class="input-field">
                              {/* <label>Occupation</label> */}
                              <input type="text" placeholder="Enter your ccupation" required/>
                          </div>

                      </div>
                  </div>


                  <div class="details ID">
                      {/* <span class="title">Identity Details</span> */}

                      <div class="fields">
                          <div class="input-field">
                              {/* <label>ID Type</label> */}
                              <input type="text" placeholder="Enter ID type" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>ID Number</label> */}
                              <input type="number" placeholder="Enter ID number" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>Issued Authority</label> */}
                              <input type="text" placeholder="Enter issued authority" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>Issued State</label> */}
                              <input type="text" placeholder="Enter issued state" required/>
                          </div>

                          <div class="input-field">
                              {/* <label>Issued Date</label> */}
                              <input type="date" placeholder="Enter issued date" required/>
                          </div>
                          
                          <div class="input-field">
                              {/* <label>Expiry Date</label> */}
                              <input type="date" placeholder="Enter expiry date" required/>
                          </div>
                      </div>
                      <button class="nextBtn">
                          <span class="btnText">Next</span>
                          <i class="uil uil-navigator"></i>
                      </button>
                  </div>
              </div>

              <div class="form second">
                  <div class="details address">
                      <span class="title">Address Details</span>

                      <div class="fields">
                          <div class="input-field">
                              <label>Address Type</label>
                              <input type="text" placeholder="Enter address type" required/>
                          </div>

                          <div class="input-field">
                              <label>Nationality</label>
                              <input type="date" placeholder="Enter nationality" required/>
                          </div>

                          <div class="input-field">
                              <label>State</label>
                              <input type="text" placeholder="Enter your state" required/>
                          </div>

                          <div class="input-field">
                              <label>District</label>
                              <input type="text" placeholder="Enter your district" required/>
                          </div>

                          <div class="input-field">
                              <label>Block Number</label>
                              <input type="number" placeholder="Enter block number" required/>
                          </div>
                          
                          <div class="input-field">
                              <label>Ward Number</label>
                              <input type="text" placeholder="Enter ward number" required/>
                          </div>

                      </div>
                  </div>


                  <div class="details family">
                      <span class="title">Family Details</span>

                      <div class="fields">
                          <div class="input-field">
                              <label>Father Name</label>
                              <input type="text" placeholder="Enter father name" required/>
                          </div>

                          <div class="input-field">
                              <label>Mother Name</label>
                              <input type="text" placeholder="Enter mother name" required/>
                          </div>

                          <div class="input-field">
                              <label>Grand Father</label>
                              <input type="text" placeholder="Enter grandfther name" required/>
                          </div>

                          <div class="input-field">
                              <label>Spouse Name</label>
                              <input type="text" placeholder="Enter spouse name" required/>
                          </div>

                          <div class="input-field">
                              <label>Father in Law</label>
                              <input type="text" placeholder="Father in law name" required/>
                          </div>
                          
                          <div class="input-field">
                              <label>Mother in Law</label>
                              <input type="text" placeholder="Mother in law name" required/>
                          </div>
                      </div>
                      <div class="buttons">
                          <div class="backBtn">
                              <i class="uil uil-navigator"></i>
                              <span class="btnText">Back</span>
                          </div>

                          <button class="submit">
                              <span class="submit">submit</span>
                              <i class="uil uil-navigator"></i>
                          </button>
                      </div>
                  </div>
              </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default Adduser
