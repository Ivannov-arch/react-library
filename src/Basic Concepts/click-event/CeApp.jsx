import ClickEvent from "./clickEvent";
import { useNavigate } from "react-router-dom";

function CeApp() {
const navigate = useNavigate()

    return(
        <>
             <div className="*:mx-4 my-6 *:my-3">
                    <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>
            <ClickEvent/>
        </>
    )
}

export default CeApp