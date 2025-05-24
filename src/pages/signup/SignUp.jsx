import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

const SignUp = () => {

  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
    fullName: "",
    phone: "",
    email: "",
    password: "",
    company: "",
    isAgency: "Yes"
  })

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/userAccount', { state: formData })
  }

  return (
      <div className='container'>

    <form onSubmit={handleSubmit}>
      <div style={{width : '100%'}} >
      <div style={{maxWidth : '200px', width : '100%', paddingBottom : '20px'}}>
        <h2 className="heading" >Create your PopX 
          account</h2>
      </div>
      <div className="input-fields-container">
        <fieldset className="input-fieldset">
          <legend className="label label-name">Full Name<span className="star">*</span></legend>
          <input type="text" id="name" name="fullName" value={formData.fullName} onChange={handleChange} className="signUp-input" required />
        </fieldset>

        <fieldset className="input-fieldset">
          <legend className="label label-phone">Phone number<span className="star">*</span></legend>
          <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="signUp-input" required />
        </fieldset>

        <fieldset className="input-fieldset">
          <legend className="label label-email">Email address<span className="star">*</span></legend>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="signUp-input" required />
        </fieldset>

        <fieldset className="input-fieldset">
          <legend className="label label-password">Password<span className="star">*</span></legend>
          <input type="password" id="password" name="password" value={formData.password} onChange={handleChange} className="signUp-input" required />
        </fieldset>

        <fieldset className="input-fieldset">
          <legend className="label label-company">Company name</legend>
          <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="signUp-input" />
        </fieldset>

        <div className="input-fieldset">
          <label className="label">Are you an Agency?<span className="star">*</span></label>
          <div className="radio-input">
              <div>

              <input
                type="radio"
                value="Yes"
                name="isAgency"
                checked={formData.isAgency === "Yes"}
                onChange={handleChange}
              />
            <label className="radio-label">
              Yes
            </label>
              </div>

              <div>

              <input
                type="radio"
                value="No"
                name="isAgency"
                checked={formData.isAgency === "No"}
                onChange={handleChange}
              />
            <label className="radio-label">
              No
            </label>
              </div>

          </div>
        </div>
</div>
      </div>
      <div className="button-container" >
        <button className="signUp-button btn-text" type="submit">Create Account</button>
      </div>
    </form>
      </div>

  )
}

export default SignUp;




