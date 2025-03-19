import {useInsertionEffect} from 'react'

export default function UseInsertEffect() {
    useInsertionEffect(() => {
        const style = document.createElement('style')
        style.innerHTML = `
        .dynamic-class {
            color: white;
            background-color: blue;
            padding: 10px;
            border-radius: 10px;
        }`
        document.head.appendChild(style)

        // cleanup: remove the <style> tag when component unmounts
        return () => {
            document.head.removeChild(style)
        }
    })

  return (
    <>
        <code>
            <p>useInsertionEffect will be executed before components being rendered and styling the components</p>
        </code> <hr /> <br />
        <div className='dynamic-class'>Styled with useInsertionEffect</div>
    </>
  )
}
