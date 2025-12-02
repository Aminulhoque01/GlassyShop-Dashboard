 
 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/Sidebar'

function App() {
 
  const router= createBrowserRouter([
    {
      path:"/",
      exact:true,
      element:<>
        <section className='main'>
          <Header/>
          <div className='contentMain flex'>
            <div className='sidebarWrapper w-[18%]'>
              <Sidebar/>
            </div>
          </div>
        </section>
      </>
    }
  ])

  return (
    <>
      
      <RouterProvider router={router}>

      </RouterProvider> 
       
       
    </>
  )
}

export default App
