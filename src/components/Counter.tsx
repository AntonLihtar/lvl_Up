import {useState} from "react";
import cls from './Counter.module.scss'

export const Counter = ()=> {

    const [count, setCount] = useState(0);

    const addCount = ()=> {
        setCount(count + 1);
    }

    return (
        <div className={cls.btnWr2}>
            <h2>{count}</h2>
            <button onClick={addCount}>increment</button>
        </div>
    )
}