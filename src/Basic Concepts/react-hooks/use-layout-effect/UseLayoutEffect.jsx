import {useEffect, useLayoutEffect} from 'react'

export default function UseLayoutEffect() {
    useEffect(() => {
        console.log('Message from useEffect');
    })

    useLayoutEffect(() => {
        console.log('Message from useLayoutEffect');
    })

  return (
    <>
        <h2>Test useLayoutEffect</h2>
        <code>
            <p>useLayoutEffect will be executed before components being rendered</p>
            <p> and then useEffect after the components are rendered</p>
        </code> <hr /> <br />
        {Array(40000).fill('').map((_, index) => <li key={index}>{Math.pow(Math.random(), 10)}</li>)}
    </>
  )
}
