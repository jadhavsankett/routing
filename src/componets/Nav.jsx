import { NavLink } from "react-router-dom"

const Nav = () => {
    return (
        <div className="flex justify-center gap-5 font-bold text-gray-400">
            <NavLink
                className={(e) => (e.isActive ? "text-amber-500" : "")}
                to={"/"}>
                Home
            </NavLink>

            <NavLink
                className={(e) => (e.isActive ? "text-amber-500" : "")}
                to={"/about"}>
                About
            </NavLink>

            <NavLink
                className={(e) => (e.isActive ? "text-amber-500" : "")}
                to={"/contact"}>
                Contact
            </NavLink>
        </div>
    )
}

export default Nav 
