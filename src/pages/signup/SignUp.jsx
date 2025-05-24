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
    const {name, value} = e.target;
    setFormdata({...formData, [name]:value})
  }
  
  const handleSubmit = (e) => {
     e.preventDefault();
     navigate('/userAccount', {state: formData})
  }

   return(
    <form onSubmit={handleSubmit}>
      <div  className="signUp-container">
        <div className="signUp-content-container">
        <div className="signUp-heading">
        <h2 className="heading">Create your PopX account</h2>
      </div>

       <fieldset className="signUp input-name">
          <legend className="label label-name">Full Name<span className="star">*</span></legend>
          <input type="text" id="name" name="fullName" value={formData.fullName} onChange={handleChange} className="signUp-input" required/>
        </fieldset>

        <fieldset className="signUp input-name">
          <legend className="label label-phone">Phone number<span className="star">*</span></legend>
          <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="signUp-input" required/>
        </fieldset>

        <fieldset className="signUp input-email">
          <legend className="label label-email">Email address<span className="star">*</span></legend>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="signUp-input" required/>
        </fieldset>

        <fieldset className="signUp input-password">
        <legend className="label label-password">Password<span className="star">*</span></legend>
        <input type="password" id="password" name="password" value={formData.password}  onChange={handleChange} className="signUp-input" required />
        </fieldset>

        <fieldset className="signUp input-company">
        <legend className="label label-company">Company name</legend>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="signUp-input" />
        </fieldset>

        <div className="signUp input-agency">
        <label>Are you an Agency?<span className="star">*</span></label> 
        <div className="radio-input">
       <label className="radio-label">
        <input 
        type="radio"
        value="Yes"
        name="isAgency"
        checked={formData.isAgency === "Yes"}
         onChange={handleChange}
        />
        Yes
       </label>
        <label className="radio-label">
        <input 
        type="radio"
        value="No"
        name="isAgency"
        checked={formData.isAgency === "No"}
        onChange={handleChange}
        />
        No
       </label>
        </div>
      </div>
      
        </div>
        <div className="button-container" >
        <button className="signUp-button" type="submit">Create Account</button>
      </div>

      </div>
      
    </form>

   )
}

export default SignUp;






 {/* <div className="signUp input-name">
        <label htmlFor="name" className="label label-name">Full Name<span className="star">*</span></label>
        <input type="text" id="name" name="fullName" value={formData.fullName} onChange={handleChange} className="signUp-input" required/>
      </div>

      <div className="signUp input-phone">
        <label htmlFor="phone" className="label label-phone">Phone number<span className="star">*</span></label>
        <input type="number" id="phone" name="phone" value={formData.phone} onChange={handleChange} className="signUp-input" required/>
      </div>

     <div className="signUp input-email">
        <label htmlFor="email" className="label label-email">Email address<span className="star">*</span></label>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="signUp-input" required/>
      </div>

      <div className="signUp input-password">
        <label htmlFor="password" className="label label-password">Password<span className="star">*</span></label>
        <input type="password" id="password" name="password" value={formData.password}  onChange={handleChange} className="signUp-input" required />
      </div>

      <div className="signUp input-company">
        <label htmlFor="comnpany" className="label label-company">Company name</label>
        <input type="text" id="company" name="company" value={formData.company} onChange={handleChange} className="signUp-input" />
      </div>

      <div className="signUp input-agency">
        <label>Are you an Agency?<span className="star">*</span></label> 
        <div className="radio-input">
       <label className="radio-label">
        <input 
        type="radio"
        value="Yes"
        name="isAgency"
        checked={formData.isAgency === "Yes"}
         onChange={handleChange}
        />
        Yes
       </label>
        <label className="radio-label">
        <input 
        type="radio"
        value="No"
        name="isAgency"
        checked={formData.isAgency === "No"}
        onChange={handleChange}
        />
        No
       </label>
        </div>
      </div> */}