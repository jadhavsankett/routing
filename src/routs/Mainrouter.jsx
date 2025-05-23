import { Route, Routes } from "react-router-dom"
import About from "../componets/About"
import Contact from "../componets/Contact"
import Home from "../componets/Home"
import ProductDetails from "../componets/ProductDetails"

const Mainrouter = () => {
  return (
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/about/detail/:name" element={<ProductDetails/>} />
        <Route path="/contact" element={<Contact />} />

      </Routes>
  )
}

export default Mainrouter
