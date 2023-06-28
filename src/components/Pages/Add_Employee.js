import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { addUser } from "../../Redux/Action/UserAction";

function Add_Employee() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [mobile, setMobile] = useState();
  const [designation, setDesignation] = useState();
  const [date_of_joining, setJoining] = useState();
  const [epf_uan, setEpf] = useState();
  const [esi_number, setEsi] = useState();
  const [profile_photo, setPhoto] = useState();
  const [date_of_relieving, setLeaving] = useState();

  const addemployee = (e) => {
    e.preventDefault();
    const userData = {
      name,
      email,
      mobile,
      designation,
      date_of_joining,
      epf_uan,
      esi_number,
      profile_photo,
      date_of_relieving,
    };
    console.log(userData);
    dispatch(addUser(userData));
    navigate("/details");
  };

  return (
    <div id="addform">
      <form onSubmit={addemployee} className="addform">
        <div className="row g-3">
          <h1>ADD Employee Details ...</h1>
          <div className="col-md-6">
            <label className="form-label">Name</label>
            <input
              type="name"
              placeholder="Enter Your Name"
              class="form-control"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Email</label>
            <input
              type="email"
              placeholder="Enter Your email"
              class="form-control"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Mobile Number</label>
            <input
              type="number"
              placeholder="Enter Your mobile no"
              class="form-control"
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Designation</label>
            <input
              type="text"
              placeholder="Enter Your designation"
              class="form-control"
              value={designation}
              onChange={(e) => setDesignation(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">Joining Date</label>
            <input
              type="date"
              placeholder="Enter Your joining date"
              class="form-control"
              value={date_of_joining}
              onChange={(e) => setJoining(e.target.value)}
            />
          </div>
          <div className="col-md-6">
            <label className="form-label">EPF UAN</label>
            <input
              type="number"
              placeholder="Enter Your epf uan"
              class="form-control"
              value={epf_uan}
              onChange={(e) => setEpf(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">ESI Number</label>
            <input
              type="number"
              placeholder="Enter Your esi no"
              class="form-control"
              value={esi_number}
              onChange={(e) => setEsi(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Photo</label>
            <input
              type="text"
              placeholder="Enter Your photo"
              class="form-control"
              value={profile_photo}
              onChange={(e) => setPhoto(e.target.value)}
            />
          </div>
          <div className="col-md-4">
            <label className="form-label">Releving Date</label>
            <input
              type="date"
              placeholder="Enter Your relieving"
              class="form-control"
              value={date_of_relieving}
              onChange={(e) => setLeaving(e.target.value)}
            />
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-outline-success">
              Submit
            </button>
            <Link to={"/details"} className="btn btn-outline-info ms-4">
              Back
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}
const mapStateToProps = (state) => ({
  items: state.items,
});

const mapDispatchToProps = {
  addUser,
};

export default connect(null, mapDispatchToProps)(Add_Employee);
