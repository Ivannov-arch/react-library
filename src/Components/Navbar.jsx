import { Link } from "react-router-dom";

export default function Navbar() {

    return(
        <ul className="flex justify-center gap-6 mb-8 border-1 rounded">
            <li><Link to='/'>Home</Link></li>
            <li><Link to='/advanced'>Advanced</Link></li>
            <li><Link to='/basic'>Basic</Link></li>
            <li><Link to='/UI'>UIs</Link></li>
        </ul>
    )
}