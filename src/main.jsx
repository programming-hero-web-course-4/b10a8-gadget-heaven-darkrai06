import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Root from './components/root/Root'
import Home from './components/outlets/home/Home'
import Statistics from './components/outlets/statistics/Statistics'
import Dashboard from './components/outlets/dashboard/Dashboard'
import Laptops from './components/outlets/home/category/laptops/Laptops'
import AllProducts from './components/outlets/home/category/all-products/AllProducts'
import Phones from './components/outlets/home/category/phones/Phones'
import Wearables from './components/outlets/home/category/wearables/Wearables'
import Tablets from './components/outlets/home/category/tablets/Tablets'
import Audio from './components/outlets/home/category/audio/Audio'
import ProductDetails from './components/outlets/home/category/ProductDetails'
import Error from './components/error/Error'
import SupportPage from './components/outlets/support/SupportPage'
const router = createBrowserRouter([
  {
    path:'/',
    element:<Root/>,
    errorElement:<Error/>,
    children:[
      {
        path:'/',
        element:<Home/>,
        loader:() =>fetch('/products.json'),
        children:[
          {
            path:'/',
            element:<AllProducts/>
          },
          {
            path:'/laptops',
            element:<Laptops/>,
          },
          {
            path:'/phones',
            element:<Phones/>
          },
          {
            path:'/audio',
            element:<Audio/>
          },
          {
            path:'/wearables',
            element:<Wearables/>
          },
          {
            path:'/tablets',
            element:<Tablets/>
          },
          {
            path:'/product/:id',
            element:<ProductDetails/>,
            loader:() => fetch('/products.json')
          }
        ]
      },

      {
        path:'/statistics',
        element:<Statistics/>
      },

      {
        path:'/dashboard',
        element:<Dashboard/>,
        loader:() => fetch('/products.json'),
      },

      {
        path:'/support',
        element:<SupportPage/>
      }
    ]
  }
])

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} hydrationFallback={<div>Loading...</div>} />
    </HelmetProvider>
  </StrictMode>
);
