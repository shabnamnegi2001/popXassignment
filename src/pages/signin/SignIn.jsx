import { useNavigate } from "react-router-dom";
import { useState } from "react";
import './signin.css'

const SignIn = () => {
  const navigate = useNavigate();

  const [formData, setFormdata] = useState({
      email: "",
      password: ""
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
     <div className="signIn-container">

        <div className="signIn-heading">
        <h2 className="heading">Signin to your PopX account</h2>
      </div>
      <div className="signIn-content">
        <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <form onSubmit={handleSubmit}>
        <fieldset className="signIn-input-1">
          <legend className="label label-1">Email Address</legend>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="signIn-input"
            placeholder="Enter email address"
            required
          />
        </fieldset>

         <fieldset className="signIn-input-2">
          <legend className="label label-2">Password</legend>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="signIn-input"
            placeholder="Enter password"
            required
          />
        </fieldset>
      
      <div>
      <button className="signIn-button" type="submit">Login</button>
      </div>
      </form>

     </div>
   )
}

export default SignIn;