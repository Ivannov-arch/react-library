import { create } from "zustand";
import { persist } from "zustand/middleware";


// Membuat store Zustand
const useCounterStore = create(persist((set) => ({
    count: 0, //state awal
    increment: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1})),
})));

export default useCounterStore