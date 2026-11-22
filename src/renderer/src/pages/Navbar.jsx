import { useContext } from "react";
import { AuthContext } from "../context/AuthContext.jsx";
import { Navigate, NavLink } from "react-router";

import logoWhite from '../../public/Assets/logo_white.png'

export default function Navbar() {
    const {userNow} = useContext(AuthContext)

    

    const role = 'member'

    const navStyle = {
        textDecoration : 'none',
        color : '#B8BCD0',
        fontSize : '14px'
    }
        function IconKotak({ size = 20 }) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <path d="m7.5 4.27 9 5.15" />
                <path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z" />
                <path d="m3.3 7 8.7 5 8.7-5" />
                <path d="M12 22V12" />
            </svg>
        )
    }

    function IconPapanKlip({ size = 20 }) {
        return (
            <svg width={size} height={size} viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2"
                strokeLinecap="round" strokeLinejoin="round">
                <rect width="8" height="4" x="8" y="2" rx="1" ry="1" />
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
            </svg>
        )
    }

    // if (!userNow) {
    //     return <Navigate to="/login"></Navigate>
    // }

    return (
        <div style={{width : '15%', backgroundColor : '#12152b', padding : '20px', color : '#B8BCD0'}}>
            <img src={logoWhite} alt="" width={'200px'} style={{marginLeft : '-25px'}} />
            {/* <p>{userNow.role.toUpperCase()}</p> */}
            <p style={{fontSize : '10px', marginBottom : '20px'}}>{role.toUpperCase()}</p>
            <NavLink style={navStyle}to="/shoppage">{} Kelola Barang</NavLink>
            <NavLink to="/shoppage"></NavLink>
        </div>
    )
}