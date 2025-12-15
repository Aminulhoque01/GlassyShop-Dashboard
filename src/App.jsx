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
              <div className={`overflow-hidden sidebarWrapper ${isSidebarOpen===true ? 'w-[18%]':'w-[0px] opacity-0'} transition-all`}>
                <Sidebar />
              </div>
              <div className={`contentRight py-4 px-5 ${isSidebarOpen===true ? 'w-[82%]' : 'w-[100%]'} transition-all`}>
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
