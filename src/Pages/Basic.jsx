import { Link } from "react-router-dom";

export default function Basic() {

    return(
        <ul className="*:my-1">
            <li><Link to='/props'>Props</Link></li>
            <li><Link to='/conditional-rendering'>Conditional Rendering</Link></li>
            <li><Link to='/render-lists'>Render Lists</Link></li>
            <li><Link to='/click-events'>Click Events</Link></li>
            <li><Link to='/hooks'>Hooks</Link></li>
            <button onClick={() => window.history.back()} className="mt-4 text-indigo-600">Back</button>
        </ul>
    )
}