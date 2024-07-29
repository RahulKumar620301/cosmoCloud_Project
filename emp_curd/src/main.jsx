import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import CreateEmp from './component/CreateEmp.jsx'
import ListEmp from './component/ListEmp.jsx'
import UpdateEmp from './component/UpdateEmp.jsx'
import ViewEmp from './component/ViewEmp.jsx'
import ImageEmp from './component/ImageEmp.jsx'
//routing
const route = createBrowserRouter([{
  path:'/',
  element:<App/>,
  children:[
    {path:'/',element:<ListEmp/>},
    {path:'/create',element:<CreateEmp/>},
    {path:'/view/:id',element:<ViewEmp/>},
    {path:'/update/:id',element:<UpdateEmp/>},
    {path:'/image/:id',element:<ImageEmp/>}
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>
)
