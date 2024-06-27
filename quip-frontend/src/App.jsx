// import './App.css'
import { Route, Routes } from "react-router-dom";
import { DashboardPage } from './Pages/Dashboard';


function App() {

  return (
    <>
       <Routes>
         <Route exact path='/dashboard' element={<DashboardPage/>} />
        </Routes>  
      
    </>
  )
}

export default App;
