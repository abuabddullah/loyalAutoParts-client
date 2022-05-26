




import './App.css';
import { Route, Routes } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './pages/homePage/Home';
import NavMenus from './pages/shared/NavMenus/NavMenus';
import Footer from './pages/shared/Footer';
import NotFound from './pages/shared/NotFound';
import Login from './pages/logRegProtect/Login';
import Purchase from './pages/purchasePage/Purchase';
import RequireAuth from './pages/logRegProtect/RequireAuth';
import AllParts from './pages/allPartsPage/AllParts';
import DashBoard from './pages/dashBoardPages/DashBoard';
import MyProfile from './pages/dashBoardPages/MyProfile';
import UpadateProfile from './pages/dashBoardPages/UpadateProfile';
import MyOrders from './pages/dashBoardPages/MyOrders';
import MyPayment from './pages/dashBoardPages/MyPayment';
import MyReview from './pages/dashBoardPages/MyReview';
import RequireAdmin from './pages/logRegProtect/RequireAdmin';
import ManageOrders from './pages/dashBoardPages/ManageOrders';
import AddProduct from './pages/dashBoardPages/AddProduct';
import ManageAdmins from './pages/dashBoardPages/ManageAdmins';
import ManageProducts from './pages/dashBoardPages/ManageProducts';
import UpadatePart from './pages/dashBoardPages/UpadatePart';
import Blogs from './pages/blogsPages/Blogs';

function App() {
  return (
    <div className="App">
      <NavMenus />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/allParts" element={<AllParts />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/purchase/:id" element={
          <RequireAuth>
            <Purchase />
          </RequireAuth>
        } />
        <Route path="/dashBoard" element={<RequireAuth><DashBoard /></RequireAuth>} >
          <Route index element={<MyProfile />} />
          <Route path="upadateProfile" element={<UpadateProfile />} />
          <Route path="myOrders" element={<MyOrders />} />
          <Route path='payment/:_id' element={<MyPayment />} />
          <Route path='myReview' element={<MyReview />} />
          <Route path='manageOrders' element={<RequireAdmin><ManageOrders /></RequireAdmin>} />
          <Route path='addProduct' element={<RequireAdmin><AddProduct /></RequireAdmin>} />
          <Route path='manageAdmins' element={<RequireAdmin><ManageAdmins /></RequireAdmin>} />
          <Route path='manageProducts' element={<RequireAdmin><ManageProducts /></RequireAdmin>} />
          <Route path='upadatePart/:_id' element={<RequireAdmin><UpadatePart /></RequireAdmin>} />
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

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
