import { Outlet, NavLink } from 'react-router'
import './styles/styles.css'

function App() {
  const ipcHandle = () => window.electron.ipcRenderer.send('ping')

  return (<>
    <NavLink to='checkoutpage'>checkout</NavLink>
    <Outlet></Outlet>
  </>)
}

export default App
