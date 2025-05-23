import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <div className="signUp input-name">
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


// import { useState } from "react";

// const SignupForm = () => {
//   const [formData, setFormData] = useState({
//     fullName: "",
//     phone: "",
//     email: "",
//     password: "",
//     company: "",
//     isAgency: "yes",
//   });

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   return (
//     <div className="flex items-center justify-center min-h-screen bg-gray-50">
//       <div className="bg-white p-10 rounded-md shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-6">Create your PopX account</h2>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <Input name="fullName" label="Full Name" value={formData.fullName} onChange={handleChange} />
//           <Input name="phone" label="Phone number" value={formData.phone} onChange={handleChange} />
//           <Input name="email" label="Email address" value={formData.email} onChange={handleChange} />
//           <Input name="password" label="Password" type="password" value={formData.password} onChange={handleChange} />
//           <Input name="company" label="Company name" value={formData.company} onChange={handleChange} />

//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">Are you an Agency?</label>
//             <div className="flex gap-6">
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="isAgency"
//                   value="yes"
//                   checked={formData.isAgency === "yes"}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 Yes
//               </label>
//               <label className="flex items-center">
//                 <input
//                   type="radio"
//                   name="isAgency"
//                   value="no"
//                   checked={formData.isAgency === "no"}
//                   onChange={handleChange}
//                   className="mr-2"
//                 />
//                 No
//               </label>
//             </div>
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-purple-600 text-white py-2 rounded-md font-medium hover:bg-purple-700 transition"
//           >
//             Create Account
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// const Input = ({ label, name, value, onChange, type = "text" }) => (
//   <div>
//     <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
//     <input
//       type={type}
//       name={name}
//       value={value}
//       onChange={onChange}
//       className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
//     />
//   </div>
// );

// export default SignupForm;
