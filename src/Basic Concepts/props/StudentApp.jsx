import Student from "./Student";
import { useNavigate } from "react-router-dom";

function AppStudent() {
const navigate = useNavigate()

    return (
        <>

            <div className="*:mx-4 my-6 *:my-3">
                    <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                    <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
                </div>

        <Student name="Spongebob" age={30} isStudent={true}/>
        <Student name="Patrick" age={42} isStudent={false}/>
        <Student name="Squidward" age={350} isStudent={false}/>
        <Student name="Sandy" age={27} isStudent={true}/>
        <Student/>
        </>
    )
}

export default AppStudent