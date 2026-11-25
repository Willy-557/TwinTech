
import { AuthContext } from "./context/AuthContext.jsx";
import { Outlet, NavLink, useNavigate} from "react-router";
import { useContext, useState } from "react";
import logoWhite from "../public/Assets/logo_white.png"
import pesanan from '../public/Assets/Pesanan.png'
import barang from '../public/Assets/Barang.png'
import keluar from '../public/Assets/Keluar.png'
import keranjang from '../public/Assets/Keranjang.png'
import belanja from '../public/Assets/Belanja.png'

function App() {
  // const { userNow } = useContext(AuthContext);
  const [userNow,setUserNow] = useState({
    nama : 'Paijo Top Global',
    role : 'admin'
  }) 

  const [currentPage,setCurrentPage] = useState('') 
  {/*useState yg ku pakai ini cuman sementara, jadi tolong diganti */}

  const navStyle = {
      textDecoration : 'none',
      color : '#B8BCD0',
      fontSize : '14px',
      display : 'flex',
      alignItems : 'center',
      gap : '10px',
      padding : '15px',
      marginBottom : '5px'
  }
  const activePage = {
    backgroundColor : '#222851',
    color : 'white',
    borderRadius : '10px'
  }

  if (!userNow) {
      return <Navigate to="/login"></Navigate>
  }

  function pindah(role) {
    if (role == 'admin') {
      setCurrentPage('manageproduct')
      return <Navigate to="/manageproduct"></Navigate>
    } else {
      setCurrentPage('shoppage')
      return <Navigate to="/shoppage"></Navigate>
      
    }
  }
  
  return (
    <>
    <div style={{display : 'flex', width : '100%', height : '100vh'}}>
      <div style={{width : '15%', backgroundColor : '#12152b', padding : '20px', color : '#B8BCD0', display: 'flex',flexDirection : 'column', justifyContent : 'space-between'}}>
          <div>
            <img src={logoWhite} alt="" width={'200px'} style={{marginLeft : '-25px'}} onClick={()=> pindah(userNow.role)}/>
            <p style={{fontSize : '10px', marginBottom : '20px'}}>{userNow.role == 'admin' ? 'ADMIN' : 'YOUR TECH SPACE'}</p>
            {userNow.role == 'admin' ? 
              (
                <div>
                  <NavLink style={currentPage == 'manageproduct' ? {...navStyle,...activePage} : navStyle} className="hoverNavigasi" to="/manageproduct" onClick={()=> setCurrentPage('manageproduct')}>
                    <img src={barang} alt="" />
                    <p>Kelola Barang</p>
                  </NavLink>
                  <NavLink style={currentPage == 'manageorder' ? {...navStyle,...activePage} : navStyle} className="hoverNavigasi" to="/manageorder" onClick={()=> setCurrentPage('manageorder')}>
                    <img src={pesanan} alt="" />
                    <p>Kelola Pesanan</p>
                  </NavLink>
                </div>
              ) : (
                <div>
                  <NavLink style={currentPage == 'shoppage' ? {...navStyle,...activePage} : navStyle} className="hoverNavigasi" to="/shoppage" onClick={()=> setCurrentPage('shoppage')}>
                    <img src={belanja} alt="" />
                    <p>Belanja</p>
                  </NavLink>
                  <NavLink style={currentPage == 'orderdetail' ? {...navStyle,...activePage} : navStyle} className="hoverNavigasi" to="/orderdetail" onClick={()=> setCurrentPage('orderdetail')}>
                     {/* ganti linkya ke keranjang, belum ada page nya  🤌🏿🤌🏿 */}
                      <img src={keranjang} alt="" />
                      <p>Keranjang</p>
                  </NavLink>
                  <NavLink style={currentPage == 'orderspage' ? {...navStyle,...activePage} : navStyle} className="hoverNavigasi" to="/orderspage" onClick={()=> setCurrentPage('orderspage')}>
                      <img src={pesanan} alt="" />
                      <p>Pesanan</p>
                  </NavLink>
                </div>
              )
            }
          </div>
          <div>
            <NavLink to='' style={{...navStyle, display : 'block', marginLeft : '-15px'}} className="hoverNavigasi">
              <b style={{fontSize : '12px', color : 'white', marginBottom : '5px'}}>{userNow.nama.toUpperCase()}</b>
              <p style={{fontSize : '10px'}}>{userNow.role.toUpperCase()}</p>
            </NavLink>
            <div style={{display : 'flex', gap : '10px', padding : '10px', marginLeft : '-10px'}} className="hoverNavigasi" onClick={()=> setUserNow()}>
                <img src={keluar}  alt="" />
                <p>Keluar</p>
            </div>
          </div>
      </div>
      
      <Outlet></Outlet>
    </div>
    </>
  )
}

export default App
