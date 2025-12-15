import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard/Dashboard";
import Header from "./Components/Header/Header";
import Sidebar from "./Components/Sidebar/Sidebar";
import { createContext, useState } from "react";

  const MyContext = createContext();

function App() {
  const[isSidebarOpen, setIsSidebarOpen]=useState(true);


  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div className={`overflow-hidden sidebarWrapper w-[${isSidebarOpen===true ? '18%':'0%'}]`}>
                <Sidebar />
              </div>
              <div className="contentRight py-4 px-5 w-[82%]">
                <Dashboard></Dashboard>
              </div>
            </div>
          </section>
        </>
      ),
    },
  ]);

 const values={
  isSidebarOpen,
  setIsSidebarOpen
 }

  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router}/>
      </MyContext.Provider>
    </>
  );
}

export default App;

export   {MyContext}
