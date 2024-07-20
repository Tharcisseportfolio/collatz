import bootstrap from 'bootstrap/dist/css/bootstrap.min.css?global'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/home/Home'
import ReadMore from './components/actions/ReadMore'
import Quiz from './components/actions/Quiz'
import Visualizing from './components/visualize/Visualizing'
import About from './components/actions/About'
import App from './App'
import './index.css'



const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/home',
    element: <Home />,
  },
  {
    path: '/visualize',
    element: <Visualizing/>,
  },
  {
    path: '/read-more',
    element: <ReadMore/>,
  },
  {
    path: '/quiz',
    element: <Quiz/>,
  },
  {
    path: '/about-me',
    element: <About/>,
  },
  
  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <RouterProvider router={router}/> 

  </React.StrictMode>,
)
