import UserGreeting from "./UserGreeting";
import { useNavigate } from "react-router-dom";

function AppUg() {
const navigate = useNavigate()

    return(
        <>

            <div className="*:mx-4 my-6 *:my-3">
                    <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>

        <div className="flex flex-wrap justify-center gap-2">
            <UserGreeting isLoggedIn={true} username="BroCode"/>
            <UserGreeting isLoggedIn={true}/>
            <UserGreeting/>
        </div>
        </>
    )
}

export default AppUg