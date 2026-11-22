import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router'
import AuthProvider from './context/AuthContext.jsx'
import App from './App'
import LoginPage from './pages/auth/LoginPage'
import RegisterPage from './pages/auth/RegisterPage'
import ManageOrdersPage from './pages/admin/ManageOrdersPage'
import ManageProductsPage from './pages/admin/ManageProductsPage'
import ProductFormPage from './pages/admin/ProductFormPage'
import UpdateOrderStatusPage from './pages/admin/UpdateOrderStatusPage'
import CheckoutPage from './pages/user/CheckoutPage'
import OrderDetailPage from './pages/user/OrderDetailPage'
import OrdersPage from './pages/user/OrdersPage'
import ProductDetailPage from './pages/user/ProductDetailPage'
import ShopPage from './pages/user/ShopPage'
import AddAddressPage from './pages/user/AddAddressPage'
import './styles/global.css'


const router = createBrowserRouter([
  {path: '/login', element:<LoginPage/>},
  {path: '/register', element:<RegisterPage/>},
  {path: '/', element:<App/>, children: [
    {path:'manageorder', element:<ManageOrdersPage/>},
    {path:'manageproduct', element:<ManageProductsPage/>},
    {path:'productform', element:<ProductFormPage/>},
    {path:'updateorder', element:<UpdateOrderStatusPage/>},
    {path:'checkoutpage', element:<CheckoutPage/>},
    {path:'orderdetail', element:<OrderDetailPage/>},
    {path:'orderspage', element:<OrdersPage/>},
    {path:'productdetail', element:<ProductDetailPage/>},
    {path:'shoppage', element:<ShopPage/>},
    {path:'addaddress', element:<AddAddressPage/>}
  ]}
]) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
        <BrowserRouter>
          <App />
        </BrowserRouter>
    </AuthProvider>
  </StrictMode>
)
