import {useTransition, useState} from 'react'

export default function UseTransition() {
    const [query, setQuery] = useState('');
    const [filteredItems, setFilteredItems] = useState([]);

    const [isPending, startTransition] = useTransition();
    
    const items = Array.from({ length: 10000 }, (_, i) => `Item ${i + 1}`);

    const handleFilter = (e) => {
        const value = e.target.value;
        setQuery(value);

        startTransition(() => {
                const filtered = items.filter((item) => 
                item.toLowerCase().includes(value.toLowerCase())
            );

            setFilteredItems(filtered);
        })
    }

  return (
    <div>
        <code>
            <p>
                useTransition will be used to optimize the performance of the application 
                by deferring state updates that might cause a re-render until the browser is idle.
                This is useful when you have a list of items and you want to filter them based on user input.
                Instead of re-rendering the list on each keystroke, you can use useTransition to 
                defer the state update until the user has finished typing.
            </p>
        </code> <hr /> <br /> <br /> 

        <input 
            type="text"
            value={query}
            onChange={handleFilter}
            placeholder='Search items...'
            className='border rounded'/>

        {isPending ? (<p>Loading...</p>) : null}

        <ul>
            {filteredItems.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
  )
}
