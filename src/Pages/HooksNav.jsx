import { Link, useNavigate } from "react-router-dom";

export default function HooksNav() {
const navigate = useNavigate

    return(
        <ul className="*:my-1">
            <li><Link to='/use-states-nav'>useState()</Link></li>
            <li><Link to='/on-change'>onChange()</Link></li>
            <li><Link to='/use-effect'>useEffect()</Link></li>
            <li><Link to='/use-context'>useContext()</Link></li>
            <li><Link to='/use-ref'>useRef()</Link></li>
            <li><Link to='/use-reducer'>useReducer()</Link></li>
            <li><Link to='/use-imperative-handle'>useImperativeHandle()</Link></li>
            <li><Link to='/use-layout-effect'>useLayoutEffect()</Link></li>
            <li><Link to='/use-insert-effect'>useInsertEffect()</Link></li>
            <li><Link to='/use-id'>useId()</Link></li>
            <li><Link to='/use-transition'>useTransition()</Link></li>
            <li><Link to='/use-deferred-value'>useDeferredValue()</Link></li>
            <li><Link to='/use-sync-external-store'>useSyncExternalStore()</Link></li>

            <div className="*:mx-2 pt-4">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>
        </ul>
    )
}