

import { Link, useNavigate } from "react-router-dom";

export default function UseStatesNav() {
const navigate = useNavigate()

    return(
        <ul className="*:my-1">
            <li><Link to='/use-state'>useState()</Link></li>
            <li><Link to='/use-state/update-array'>UpdateArray</Link></li>
            <li><Link to='/use-state/update-object'>UpdateObject</Link></li>
            <li><Link to='/use-state/update-array-of-object'>UpdateArrayOfObject</Link></li>
            <li><Link to='/use-state/counter'>Counter</Link></li>
            <div className="*:mx-2 pt-4">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>
        </ul>
    )
}