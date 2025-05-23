import { useNavigate, useParams } from "react-router-dom"

const productDetails = () => {
  const navigete = useNavigate()
  const params = useParams()
  return (
    <div className="p-5 mt-5 w-50 rounded bg-gray-300">
      <h1 className="text-2xl text-red-400 uppercase">{params.name}</h1>
      <h2 className="font-thin mb-5">product details</h2>
      <button 
      onClick={()=>navigete(-1)}
      className=" px-3 py-1 bg-gray-500 rounded text-white text-xl">go back</button>
    </div>
  )
}

export default productDetails
