
import { useSelector, useDispatch } from "react-redux"
import useAuthStore from "../../../Auth/AuthStore";
import { useNavigate } from "react-router-dom";

export default function ReduxApp() {
const navigate = useNavigate()

    const user = useAuthStore((state) => state.user)

    const count = useSelector((state) => (state.count));
    const dispatch = useDispatch();

    // alternative
    // const tambah = () => {
    //     dispatch({ type: "INCREMENT" }); // Kirim action "INCREMENT" ke Redux store
    //   };
    
    //   const kurangi = () => {
    //     dispatch({ type: "DECREMENT" }); // Kirim action "DECREMENT" ke Redux store
    //   };

    return (
        <div className="mt-12 text-center"> 
            <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>

            <div>    
                <h2>Redux</h2>
                <p>Welcome, {user.name}</p>
            </div>

            <h1>Redux Counter</h1>
            <h2 className="my-5 text-6xl">{count}</h2>
            <button onClick={() => dispatch({ type: "DECREMENT"})}>Kurangi</button>
            <button onClick={() => dispatch({ type: "INCREMENT"})}>Tambah</button>
        </div>
    )
}