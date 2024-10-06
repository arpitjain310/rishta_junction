import React from 'react';
import './profile.css';

const Profile = () => {
  return (
    <div className="profile-container">
      <ol className="profile-breadcrumb">
        <li><a href="/matrimony-search/matrimonial-search-options.php">Search Options</a></li>
        <li className="active">Matrimony Profile of id - Hindu Hindi,  Bride/ Girl from Delhi.</li>
      </ol>

      <div className="profile-header">
        <div className="profile-title">
          <h1>id</h1>
        </div>
        <div className="profile-navigation">
          <span className="profile-nav-arrow"></span>
        </div>
      </div>

      <div className="profile-content">
        <div className="profile-image-container">
          <div className="profile-image-wrapper">
            <a data-toggle="modal" id="image-modal" href="#myModal" title="id : Kayastha (Hindi) from Faridabad" className="profile-image-link">
              <img src="" alt="id : Kayastha (Hindi) from Delhi" className="profile-image" />
            </a>
          </div>

          {/* Modal code here */}
        </div>

        <div className="profile-details">
          <div id="prof_basic_det_block" className="profile-basic-details">
            <ul id="basic_left" className="profile-details-list">
              <li><label className="profile-label">Age</label><span className="profile-detail">29 Years</span></li>
              <li><label className="profile-label">Height</label><span className="profile-detail">5ft 4in - 162cm</span></li>
              <li><label className="profile-label">Marital Status</label><span className="profile-detail">Never Married</span></li>
              {/* More list items */}
            </ul>
          </div>
          <div class="col-xs-12 col-sm-6 col-md-4 center-block" >
            <div id="prof_basic_det_block" class="text-left">
              <ul id="basic_left">
                <li><label class="profLabel">Age</label>
                  <span class="detail">333 Years</span>
                </li>
                <li><label class="profLabel">Height</label><span class="detail">5ft 32in - 10cm</span></li>
                <li><label class="profLabel">Marital Status</label><span class="detail">Never Married</span></li>
                <li><label class="profLabel">Posted by</label>
                  <span class="detail">Parent/ Guardian</span>
                </li>
                <li><label class="profLabel">Religion</label><span class="detail">Hindu	</span>
                </li>
                <li><label class="profLabel">Caste</label>
                  <span class="detail">Brahmin Bhatt	</span>
                </li>
                <li><label class="profLabel">Community</label><span class="detail">Hindi</span></li>
                <li><label class="profLabel">Complexion</label><span class="detail">Fair</span></li>
                <li><label class="profLabel">Body Type </label><span class="detail">Slim</span></li>
                <li><label class="profLabel">Profession</label><span class="detail">Teacher</span></li>
                <li><label class="profLabel">Education</label><span class="detail">Bachelors in Arts</span></li>

                <li><label class="profLabel">Country, State</label><span class="detail">India, Uttar Pradesh</span></li>
                <li><label class="profLabel">City</label><span class="detail">agra</span></li>
              </ul>
            </div>


          </div>
        </div>


      </div>
        <div className="col-xs-12 col-sm-12 col-md-9 col-lg-10"> 

          <div className="row">
            <h3 className="mainheading">About , personality, goals, family & Partner preferences</h3>
            <div className="prof_data_cont col-xs-12 col-sm-12 col-md-12">
              <p>1.Height 5'3'' 2.Parents live in . .. Father is in Indian Railway <br />
                Brother is BTECH.CSC teaching at , he's unmarried.</p>
              <br />
                <p className="fbold grey">About Life Partner Preferences:</p>
                <p>Vegetarian, supporting, optimistic</p>
            </div>
          </div>

          <div className="clearfix"></div>


          <div className="row">
            <div className="prof_sub_head fbold">Basics & Lifestyle</div>
            <div className="prof_data_cont col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-12  col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <label className="profLabel">Gender</label>
                <div className="profDesc">Girl (Bride)</div>
                <div className="clearfix"></div>
                <div className="profLabel">Age</div>
                <div className="profDesc">33 Years</div>
                <div className="clearfix"></div>
                <div className="profLabel">Height</div>
                <div className="profDesc">8ft 3in - 16cm</div>
                <div className="clearfix"></div>
                <div className="profLabel">Complexion</div>
                <div className="profDesc">Fair</div>
                <div className="clearfix"></div>
                <div className="profLabel">Body Type</div>
                <div className="profDesc">Slim</div>
                <div className="clearfix"></div>
                <div className="profLabel">Marital Status</div>
                <div className="profDesc">Never Married</div>
                <div className="clearfix"></div>
                <div className="profLabel"> Have Children</div>
                <div className="profDesc">No</div>
                <div className="clearfix"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Diet</div>
                <div className="profDesc">Vegetarian</div>
                <div className="clearfix"></div>
                <div className="profLabel">Drink</div>
                <div className="profDesc">No</div>
                <div className="clearfix"></div>
                <div className="profLabel">Smoke</div>
                <div className="profDesc">No</div>
                <div className="clearfix"></div>
                <div className="profLabel">Blood Group</div>
                <div className="profDesc"></div>
                <div className="clearfix"></div>
                <div className="profLabel">Special Case</div>
                <div className="profDesc">None</div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <h4 className="prof_sub_head fbold">Religious & Social Background </h4>
            <div className="prof_data_cont col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-12  col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Religion</div>
                <div className="profDesc">Hindu</div>
                <div className="clearfix"></div>
                <div className="profLabel">Caste</div>
                <div className="profDesc">Brahmin Bhatt</div>
                <div className="clearfix"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Mother Tongue</div>
                <div className="profDesc">Hindi</div>
                <div className="clearfix"></div>

                <div className="profLabel">Personal Values</div>
                <div className="profDesc">Traditional</div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>


          <div className="row">
            <h4 className="prof_sub_head fbold">Education and Profession</h4>
            <div className="prof_data_cont col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-12  col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Studies Level</div>
                <div className="profDesc">Bachelors</div>
                <div className="clearfix"></div>
                <div className="profLabel">Studies Field</div>
                <div className="profDesc">Arts</div>
                <div className="clearfix"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Occupation</div>
                <div className="profDesc">Teacher</div>
                <div className="clearfix"></div>
                <div className="profLabel">Annual income</div>
                <div className="profDesc">Rs. 2 Lakh - 3 Lakh</div>
                <div className="clearfix"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">About Education</div>
                <div className="profDesc">Class X and Xii from UP BOARD, B.A. and Bachelor in Physical Education from Vanasthali</div>
                <div className="clearfix"></div>
                <div className="profLabel">About Profession</div>
                <div className="profDesc">Trainer in sports and </div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <h4 className="prof_sub_head fbold">Location ⁄ Residence</h4>
            <div className="prof_data_cont col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-12  col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Country</div>
                <div className="profDesc">India</div>
                <div className="clearfix"></div>
                <div className="profLabel">State Residing</div>
                <div className="profDesc">Uttar Pradesh</div>
                <div className="clearfix"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">City Residing</div>
                <div className="profDesc">Gorakhpur</div>
                <div className="clearfix"></div>
                <div className="profLabel">Residency</div>
                <div className="profDesc">Permanent Resident</div>
                <div className="clearfix"></div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="prof_sub_head fbold">Astro Details</div>
            <div className="prof_data_cont col-xs-12 col-sm-12 col-md-12">
              <div className="col-xs-12 col-sm-12  col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Place of Birth</div>
                <div className="profDesc">*** </div>
                <div className="clearfix"></div>
                <div className="profLabel">Date of Birth</div>
                <div className="profDesc">*** </div>
                <div className="clearfix"></div>
                <div className="profLabel">Time of Birth</div>
                <div className="profDesc">*** </div>
                <div className="clearfix"></div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-6" style={{borderRight:"1px solid #D9D9D9"}}>
                <div className="profLabel">Country Of Birth</div>
                <div className="profDesc">India</div>
                <div className="clearfix"></div>
                <div className="profLabel">Manglik</div>
                <div className="profDesc">No</div>
                <div className="clearfix"></div>
              </div>
            </div>
            <div>*** Details visible after registration</div>
          </div>


        </div>
    </div>
  );
};

export default Profile;
