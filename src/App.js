import { createContext, useState } from 'react';
import './App.scss';

import Navbar from './components/Navbar/Navbar';
import LeftBar from './components/LeftBar/LeftBar';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
import Product from './pages/Product/Product';



import {createBrowserRouter, RouterProvider, Outlet} from 'react-router-dom'
import Credit from './pages/Credit/Credit';

export const DataContext = createContext(null)

const Layout = () => {

  const [dataFilter, setDataFilter] = useState([])

  return (
    <DataContext value={{dataFilter, setDataFilter}}>
      <div className="app">
        <Navbar />
        <div className='middle'>
          <LeftBar />
          <Outlet />
        </div>
        <Footer />
      </div>
    </DataContext>
    
  )
}


const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/products/:slug?/filter?/:price?/:ram?/:storage?',
        element: <Home />
      },
      {
        path: '/product/:id',
        element: <Product/>
      },
      {
        path: '/credit',
        element: <Credit/>
      }
    ]
  }
  
])



function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
