import { Outlet } from "react-router-dom"
import NavBar from "./components/NavBar"
import Footer from "./components/Footer"

const App = () => {
  return (
    <>
    <NavBar></NavBar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
