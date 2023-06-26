import './App.css';
import SignIn from '../src/pages/Sign-in'
import SignUp from '../src/pages/Sign-up'
import AuthDetails from '../src/components/AuthDetails'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<SignIn/>} />
        <Route path='/sign-up' element={<SignUp/>} />
      </Routes>
      <AuthDetails />
    </Router>
    </>
  );
}

export default App;
