import { Link } from "react-router-dom";

export default function PerformanceOptimization() {

    return(
        <ul className="*:my-1">
            <li><Link to='/performances/react-memo'>React.memo()</Link></li>
            <li><Link to='/performances/use-memo'>useMemo()</Link></li>
            <li><Link to='/performances/use-callback'>useCallBack()</Link></li>
            <li><Link to='/performances/react-lazy'><s>React.lazy()</s></Link></li>
            <li><Link to='/performances/react-window'>React.window()</Link></li>
            <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
        </ul>
    )
}

