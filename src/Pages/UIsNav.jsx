import { Link } from "react-router-dom";

export default function UINav() {

    return(
        <ul className="*:my-1">
            <li><Link to='/UI/table'>Table</Link></li>
            {/* <li><Link to='/state-managers/redux'>Redux</Link></li> */}
            <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
        </ul>
    )
}

