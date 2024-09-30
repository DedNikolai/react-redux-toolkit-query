import { useState } from 'react'
import { useSelector } from 'react-redux';
import useAction from '../hooks/useActions';

function Counter() {
    const count = useSelector(state => state.counter.value);
    const [number, setNumber] = useState(0);
    const change = e => {
      setNumber(e.target.value);
    }

    const {increment, decrement, incrementByAmount} = useAction();
    
    return (
        <>
            <h3>{count}</h3>
            <div><button onClick={() => increment()}>INCREMENT</button></div>
            <div><button onClick={() => decrement()}>DECREMENT</button></div>
            <div>
            <input 
                type='text'
                value={number}
                onChange={change}
            />
            <button onClick={() => incrementByAmount(+number)}>incrementByAmount</button>
            </div>
        </>
    )
};

export default Counter;