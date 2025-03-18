import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // Pakai localStorage

const persistConfig = {
    key: "root",
    storage,
};

// Initial state (nilai awal)
const InitialState = {
    count: 0,
};

// Reducer (mengatur cara state berubah);
const counterReducer = (state = InitialState, action) => {
    switch (action.type) {
        case "INCREMENT":
            return { count: state.count + 1 };
        case "DECREMENT":
            return { count: state.count - 1 };
        default:
            return state;
    }
}

// const store = createStore(counterReducer);
const persistedReducer = persistReducer(persistConfig, counterReducer);
const store = createStore(persistedReducer);
const persistor = persistStore(store);

export {store, persistor}

store.subscribe(() => {
    console.log("State berubah:", store.getState())
})

console.log("Redux State:", store.getState());