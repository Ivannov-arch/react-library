import {useReducer} from 'react'

export default function UseReducer() {
    const initialState = {count: 0};
    const reducer = (state, action) => {
        switch(action.type) {
            case 'INCREASE':
                return {count: state.count + 1};
            case 'DECREASE':
                return {count: state.count - 1};
            case 'INPUT':
                return {count: action.payload};
            default:
                return state
        }
        
    }

    const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
        <h1>UseReducer</h1>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({type: 'INCREASE'})}>Increase</button>
        <button onClick={() => dispatch({type: 'DECREASE'})}>Decrease</button>
        <input value={state.count} type="number" onChange={(e) => dispatch({type: 'INPUT', payload: Number(e.target.value)})}/>
        <br /> <br />
        <hr />
        <code>
            <p>useReducer is a hook that allows you to manage state and perform actions in a component.</p>
        </code>
    </>
  )
}
