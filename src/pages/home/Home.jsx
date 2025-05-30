import { Link } from "react-router-dom";
import './home.css'


const Home = () => {
    return (
      <div className='container'>

        <div className="home-container">
            <div className="content-container">
                <div className="inner-container">
                    <h2 className="heading ">Welcome to PopX</h2>
                    <p className="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
                <div>
                    <Link to="/signUp">
                        <button className="btn-primary btn-text">Create Account</button>
                    </Link>
                </div>
                <div>
                    <Link to="/signIn">
                        <button className="btn-secondary btn-text">Already Registered? Login</button>
                    </Link>
                </div>
            </div>
      </div>
        </div>
    )
}

export default Home;