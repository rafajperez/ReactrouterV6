import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// 1 - Configurando router //
import { createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom'
import Error from './routes/Error.jsx'
import Home from "./routes/Home.jsx";
import Contact from './routes/Contact.jsx'
import ContactDetails from './routes/ContactDetails.jsx'

const router = createBrowserRouter([{
  
  path: "/",
  element:<App />,
  // 3 - Página de erro //
  errorElement:<Error />,
  children:[
  
  {
    path: '/',
    element: <Home />
  },
  {
    path: 'contact',
    element: <Contact />
  },
  
   // 5 - Nested routes identificador unico dinamic routes//

  {
    path: 'contact/:id',  // os dois pontos significa que o contato será sempre dinâmico //
    element: <ContactDetails />
  },

  // 7- Navigate para páginas não existentes //
  {
    path:"oldcontact",
    element:<Navigate to="/contact" />
  }

],
},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router ={router}  />
  </React.StrictMode>,
)
