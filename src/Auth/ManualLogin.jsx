import { useState, useEffect } from "react";
import useAuthStore from "./AuthStore";
import { useNavigate } from "react-router-dom";


export default function ManualLogin() {
const navigate = useNavigate();

    const login = useAuthStore((state) => state.login);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    class UserName {
        constructor(name, password) {
            this.name = name;
            this.password = password;
        }
    }
    
    // Menyimpan beberapa username dan password dalam array
    const users = [
        new UserName("Spongebob", "krabby patty"),
        new UserName("Patrick", "sleep"),
        new UserName("Sandy", "treehouse"),
        new UserName("Cell", "makan"),
        new UserName("Richard", "crypto boy"),
        new UserName("Me", "Me"),
        new UserName("me", "me"),
        // Tambahkan user lain jika diperlukan
    ];

    useEffect(() => {
        const storedIsLoggedIn = JSON.parse(localStorage.getItem("isLoggedIn"));
        if (storedIsLoggedIn) {
          useAuthStore.setState({ isLoggedIn: storedIsLoggedIn });
        }
      }, []);
      



    const handleLogin = () => {
        // let userData = ""
        
        if (username.trim() === "") {
            alert("Username tidak boleh kosong");
            return;
        }

        const foundUser = users.find(user => user.name === username && user.password === password);

    if (foundUser) {
        console.log("User found:", foundUser); // Debugging
        login({ name: username, password: password });
        console.log("After login, isLoggedIn:", useAuthStore.getState().isLoggedIn); // Debugging
        alert(`Welcome, ${username}`);
        navigate('/');
    } else {
        alert("Username atau password salah");
    }
        }

        return (
            <div className="*:block flex-col gap-6">
                <h2>Login</h2>
                <input 
                    className="my-6 border rounded"
                    type="text"
                    placeholder="Enter your username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)} />

                <input 
                    className="my-6 border rounded"
                    type="text"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)} />

                <button onClick={handleLogin}>Login</button>
            </div>
        )
}