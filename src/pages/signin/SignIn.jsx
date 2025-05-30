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
    const { name, value } = e.target;
    setFormdata({ ...formData, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/userAccount', { state: formData })
  }


  return (
      <div className='container'>

    <div className="signIn-container">

      <div className="signIn-heading">
        <h2 className="heading">Signin to your PopX account</h2>
        <p className="content">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <form  onSubmit={handleSubmit}>
        <div>
        <div className="input-fields-container">
        <fieldset className="input-fieldset">
          <legend className="label label-1">Email Address</legend>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email address"
            required
          />
        </fieldset>

        <fieldset className="input-fieldset">
          <legend className="label label-2">Password</legend>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            required
          />
        </fieldset>
        </div>

        <div>
          <button
            className="signIn-button btn-text"
            type="submit"
            disabled={!(formData.email && formData.password)}
            style={{
              backgroundColor: formData.email && formData.password ? '#6C25FF' : '#CBCBCB',
            }}
          >
            Login
          </button>
        </div>
        </div>

      </form>
      </div>

    </div>
  )
}

export default SignIn;