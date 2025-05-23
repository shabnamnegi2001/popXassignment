import { Link } from "react-router-dom";


const Home = () => {
    return(
        <div className="home-container">
        <div className="content-container">
        <div className="inner-container">
        <h2 className="heading">Welcome to PopX</h2>
        <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
        <div>
        <Link to="/signUp">
        <button className="btn-primary">Create Account</button>
        </Link>
        </div>
        <div>
        <Link to="/signIn">
        <button className="btn-secondary">Already Registered? Login</button>
        </Link>
        </div>
        </div>
        </div>
    )
}

export default Home;