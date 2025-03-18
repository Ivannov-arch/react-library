import { Link } from "react-router-dom"

export default function ReactQueryApp() {
  return (
    <ul className="flex flex-col *:my-1">
        <Link to='/react-query/austin'>by Austin Davis</Link>
        <Link to='/react-query/wds'>by Web Dev Simplified</Link>
        <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
    </ul>
  )
}
