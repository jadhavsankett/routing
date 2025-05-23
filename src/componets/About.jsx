import { useNavigate } from "react-router-dom"

const About = () => {
  const navigate = useNavigate()
  const navigatorhandler =(name)=>{
   navigate(`/about/detail/${name}`)
  }

  return (
    <div className="text-2xl font-thin text-red-500 "> 
       <h1>Products</h1>
       <div className="flex flex-wrap gap-5 ">
       <div className="p-4 rounded  mt-5 w-50 bg-gray-300">
        <h1 className="text-xl text-black mb-3 font-bold">product 1</h1>
        <button 
         onClick={()=>navigatorhandler("product-1")}
        className=" px-3 py-1 bg-gray-500 rounded text-white text-xl">see details</button>
       </div>

        <div className="p-4 rounded mt-5 w-50 bg-gray-300">
        <h1 className="text-xl text-black mb-3 font-bold">product 2</h1>
        <button 
          onClick={()=>navigatorhandler("product-2")}
        className=" px-3 py-1 bg-gray-500 rounded text-white text-xl">see details</button>
       </div>

        <div className="p-4  rounded mt-5 w-50 bg-gray-300">
        <h1 className="text-xl text-black mb-3 font-bold">product 3</h1>
        <button 
          onClick={()=>navigatorhandler("product-3")}
        className=" px-3 py-1 bg-gray-500 rounded text-white text-xl">see details</button>
       </div>
       </div>
    </div>
  )
}

export default About
