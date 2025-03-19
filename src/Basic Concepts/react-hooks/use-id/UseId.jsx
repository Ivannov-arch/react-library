import {useId} from 'react'

export default function UseId() {
    const id = useId()
    const id2 = useId()

  return (
    <div>
        <code>
            <p>useId will generate a unique IDs</p>
        </code> <hr /> <br />
        <label htmlFor={id}>Enter your name</label>
        <input className='border rounded' type="text" id={id} /> <br /> <br />

        <label htmlFor={id2}>Enter your name</label>
        <input className='border rounded' type="text" id={id} />
    </div>
  )
}
