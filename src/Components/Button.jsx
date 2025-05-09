import { useNavigate } from "react-router-dom";

export default function Buttons() {
  const navigate = useNavigate();

  return (
    <div className="space-x-4 mx-4 my-6 *:my-3 border-none text-center">
      <button onClick={() => navigate("/")} className="text-indigo-600">
        Home
      </button>
      <button onClick={() => window.history.back()} className="text-indigo-600">
        Back
      </button>
    </div>
  );
}
