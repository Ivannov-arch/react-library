/* eslint-disable no-unused-vars */
 
import React from 'react';
import screenshot from '../../assets/ErrorBoundary.png'
import { useNavigate } from 'react-router-dom';

export default function ErrorBoundaryApp () {
const navigate = useNavigate()

return (
    <div className=''>

        <img src={screenshot} alt="" />
        <div className='*:mx-3 *:my-4'>
            <button className='text-indigo-500' onClick={() => navigate('/')}>Home</button>
            <button className='text-indigo-500' onClick={() => window.history.back()}>Back</button>
        </div>

        <code className='text-start'>
            <p>{`class ErrorBoundary extends React.Component {`}</p>
                    <p>{`constructor(props) {`}</p>
                        <p>super(props);</p>
                        <p>{`this.state = { hasError: false };`}</p>
                    <p>{`}`}</p> <br />
            
                    <p>{`static getDerivedStateFromError(error) {`}</p>
                        <p className='text-green-400'>{`// Update state so the next render shows the fallback UI.`}</p>
                        <p>{`return { hasError: true };`}</p>
                    <p>{`}`}</p> <br />
            
                    <p> {`componentDidCatch(error, errorInfo) {`}</p>
                        <p>{`// You can also log the error to an error reporting service`}</p>
                        <p>{`console.error("ErrorBoundary caught an error", error, errorInfo);`}</p>
                   <p>{` }`}</p> <br />
            
                    <p>{`render() {`}</p>
                       <p>{` if (this.state.hasError) {`}</p>
                            <p>{`// You can render any custom fallback UI`}</p>
                           <p>{` return <h1>Something went wrong.</h1>;`}</p>
                        <p>{`}`}</p> <br />
                      <p>{`  return this.props.children; `}</p>
                   <p>{` }`}</p> <br />
              <p>{`  }`}</p>
            <p>{` export default ErrorBoundary;`}</p>
        </code>
    </div>
)
}