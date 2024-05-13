export default function Navbar() {
    return (
    <nav className="nav">
        <div className="flex items-center justify-between p-3">
            <div className="text-white font-mono text-2xl  tracking-wider flex items-center">Qwerky</div>
            <div className="text-xl space-x-1">
            <a className="text-slate-300 hover:bg-gray-800 rounded-full px-3 py-2" href="/">Home</a>
            <a className="text-slate-300 hover:bg-gray-800 rounded-full px-3 py-2" href="/">About</a>
            <a className="text-slate-300 hover:bg-gray-800 rounded-full px-3 py-2" href="/">Skill</a>
            <a  className="text-slate-300 hover:bg-gray-800 rounded-full px-3 py-2" href="/">Projects</a>
            </div>
        </div>
    </nav>
    )
}