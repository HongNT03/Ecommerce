import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';

import Shop from './pages/Shop';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import LoginSignup from './pages/LoginSignup';
import Cart from './pages/Cart';

import men_banner from './components/Assets/banner_mens.png'
import women_banner from './components/Assets/banner_women.png'
import kid_banner from './components/Assets/banner_kids.png'

function Layout() {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      { path: '/', element: <Shop /> },
      { path: '/men', element: <ShopCategory category="men" banner={men_banner} /> },
      { path: '/women', element: <ShopCategory category="women" banner={women_banner} /> },
      { path: '/kid', element: <ShopCategory category="kid" banner={kid_banner} /> },
      { path: '/product/:productId', element: <Product /> },
      { path: '/cart', element: <Cart /> },
      { path: '/login', element: <LoginSignup /> }
    ]
  }
]);

function App() {
  return (
    <RouterProvider router={router} />
  );
}
export default App;
