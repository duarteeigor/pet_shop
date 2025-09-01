import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import router from './routes.tsx'

import CartProvider from './contexts/CartContext.tsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')!).render(
  <CartProvider>
    <Toaster
      position='top-center'
      reverseOrder={false}
    />
    <RouterProvider router={router}></RouterProvider>
  </CartProvider>

)
