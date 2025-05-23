import './App.css';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import AccountPage from './pages/Account';

function App() {

  return (
    <div className="app-container">
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/signIn' element={<SignIn />} />
        <Route path='/signUp' element={<SignUp />} />
        <Route path='/userAccount' element={<AccountPage />} />
    </Routes>
    </Router>
    </div>
  )
}

export default App;
