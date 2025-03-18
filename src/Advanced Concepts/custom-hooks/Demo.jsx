/* eslint-disable react/prop-types */
import useCustom from "./useCustom";
import { useNavigate } from "react-router-dom";

export default function Demo({ defaultValue }) {
const navigate = useNavigate()

    const value = useCustom(defaultValue);
    return (
    <div>
        <div className="*:mx-4 my-6 *:my-3">
                <button onClick={() => navigate('/')} className="text-indigo-600">Home</button>
                <button onClick={() => window.history.back()} className="text-indigo-600">Back</button>
            </div>
        <h1>{value}</h1>
    </div>);
}
