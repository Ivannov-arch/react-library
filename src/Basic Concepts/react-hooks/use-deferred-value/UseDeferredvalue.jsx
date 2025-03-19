import {useDeferredValue, useState} from 'react'

export default function UseDeferredvalue() {
    const [query, setQuery] = useState('');
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);
    const deferredQuery = useDeferredValue(query);

    const filteredItems = items.filter((item) => 
        item.toLowerCase().includes(deferredQuery.toLowerCase()))

  return (
    <div>
        <code>
            <p>UseDeferredValue() Defers the value of a variable until the next render.</p>
        </code> <hr /> <br /> <br />
        <input 
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder='Search items...'
            className='border rounded'/>

        {query !== deferredQuery && <p>Loading...</p>}

        <ul>
            {filteredItems.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
