import Navbar from "./Navbar"
import Home from "./Home"

export default function Main() {
    return (
        <>
        <div href="/" className="bg-gray-700">
            <Navbar></Navbar>
        </div>
        <div>
            <Home></Home>
        </div>
        </>
    )
}