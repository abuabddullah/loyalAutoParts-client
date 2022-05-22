import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <div className="App">
      <button class="btn btn-primary">Button</button>
      <button class="btn btn-secondary">Button</button>
      <button class="btn btn-accent">Button</button>
      <Routes>
        {/* <Route path="/" element={<Home />} />
      <Route path="/" element={<Home />} /> */}
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>




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
