import { create } from "zustand"
import { persist, createJSONStorage } from "zustand/middleware";

const useAuthStore = create(persist(
    (set) => ({
    
        user: null, // Informasi user, default-nya null (belum login)
        isLoggedIn: false, // Status login, default-nya false
        login: (userData) =>{
            console.log("Logging in:", userData); // Debugging
            set(() => ({
                user: userData,
                isLoggedIn: true
            }))}, // fungsi untuk login
        logout: () =>
            set(() => ({
                user: null,
                isLoggedIn: false,
            }))
    }),
    {
        name: "auth-storage",
        storage: createJSONStorage(() => localStorage)
    }    
));

export default useAuthStore