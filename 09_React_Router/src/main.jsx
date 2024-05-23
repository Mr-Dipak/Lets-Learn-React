import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import { Home,About,Contact,User, GitHub, } from './components/index.js'
import { githubInfoLoader } from './components/gitHub/GitHub.jsx'

// const router = createBrowserRouter([
//   {
//   path:'/',
//   element:<Layout/>,
//   children:
//   [
//     {
//       path:"/",
//       element: <Home/>

//     },
//     {
//       path:"/About",
//       element: <About/>
//     },
//     {
//       path:"/Contact",
//       element: <Contact/>
//     }
//   ]
// }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route path='' element={<Home/>}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='Contact' element={<Contact/>}></Route>
      <Route path='User/:userid' element={<User/>}></Route>
      <Route 
      loader={githubInfoLoader}
      path='github' element={<GitHub/>}></Route>

    </Route>
  )
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
