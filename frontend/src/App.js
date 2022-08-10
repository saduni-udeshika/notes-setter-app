import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './pages/Dashboard';
import Login from './pages/Login';
import Register from './pages/Register';
import UpdateNote from './pages/UpdateNote';
import AllUsers from './pages/AllUsers';

function App() {
   return (
      <>
         <Router>
            <div className="container">
               <Header />
               <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<Register />} />
                  <Route path="/update-note" element={<UpdateNote />} />
                  <Route path="/all-users" element={<AllUsers />} />
               </Routes>
               <Footer />
            </div>
         </Router>
         <ToastContainer />
      </>
   );
}

export default App;
