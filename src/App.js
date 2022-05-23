import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/homePage/Home';
import NavMenus from './pages/shared/NavMenus/NavMenus';
import Footer from './pages/shared/Footer';
import NotFound from './pages/shared/NotFound';

function App() {
  return (
    <div className="App">
      <NavMenus>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </NavMenus>
      <Footer />

      {/* <ToastContainer /> */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
}

export default App;
