 
 
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import Dashboard from './pages/Dashboard/Dashboard'
import Header from './Components/Header/Header'

function App() {
 
  const router= createBrowserRouter([
    {
      path:"/",
      exact:true,
      element:<>
        <section className='main'>
          <Header/>
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
