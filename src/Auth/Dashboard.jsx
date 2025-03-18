import useAuthStore from "./AuthStore";

export default function Dashboard() {
    const user = useAuthStore((state) => state.user);
    const isLoggedIn = useAuthStore((state) => state.isLoggedIn);
    const logout = useAuthStore((state) => state.logout);

    if(!isLoggedIn) {
        return <h2>Silakan login terlebih dahulu</h2>
    }

    return(
        <div>
            <h2>Dashboard</h2>
            <p>Welcome, {user.name}!</p>
            <button onClick={logout}></button>
        </div>
    )
 }