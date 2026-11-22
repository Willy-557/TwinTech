
import { AuthContext } from "./context/AuthContext.jsx";
import { Outlet } from "react-router";
import Navbar from './pages/Navbar.jsx'
import { useContext } from "react";
import ManageOrdersPage from "./pages/admin/ManageOrdersPage.jsx";

function App() {

  const { userNow } = useContext(AuthContext);
  
  return (
    <>
    <div style={{display: 'flex', width : '100%'}}>
      <Navbar style={{width : '30%'}}></Navbar>
      <ManageOrdersPage  style={{width : '70%'}}/>
    </div>
    </>
  )
}

export default App
