const Signup = () => {
  return (
    <div className="card">
      <h2>Create your PopX account</h2>
      <label>Full Name*</label>
      <input type="text" placeholder="Full Name" />
      <label>Phone number*</label>
      <input type="text" placeholder="Phone number" />
      <label>Email address*</label>
      <input type="email" placeholder="Email address" />
      <label>Password *</label>
      <input type="password" placeholder="Password" />
      <label>Company name</label>
      <input type="text" placeholder="Company name" />
      <div className="radio-group">
        <label>Are you an Agency?*</label>
        <div>
          <input type="radio" name="agency" value="yes" /> Yes
          <input type="radio" name="agency" value="no" style={{ marginLeft: '20px' }} /> No
        </div>
      </div>
      <button className="primary">Create Account</button>
    </div>
  );
};

export default Signup;
