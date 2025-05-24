import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/home/Home';
import SignIn from './pages/signin/SignIn';
import SignUp from './pages/signup/SignUp';
import AccountPage from './pages/account/Account';

function App() {

  return (
    <div className="app-container">
      <div className='container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/signIn' element={<SignIn />} />
          <Route path='/signUp' element={<SignUp />} />
          <Route path='/userAccount' element={<AccountPage />} />
      </Routes>
      </Router>
      </div>
    </div>

  )
}

export default App;
