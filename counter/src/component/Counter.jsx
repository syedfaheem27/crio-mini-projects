import { createContext, useContext, useState } from "react";

const CounterContext = createContext();


const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0)
    return <CounterContext.Provider value={{
        count,
        setCount
    }}>
        {children}
    </CounterContext.Provider>
}


const Label = ({ label }) => {
    return <header className="label">
        <h1>
            {label}
        </h1>
    </header>
}

const Count = () => {
    const { count } = useContext(CounterContext);

    return <section className="count">
        <h2>Count</h2>
        <span>{count}</span>
    </section>
}
const Increment = ({ icon, jump = 1 }) => {
    const { setCount } = useContext(CounterContext)

    return <button onClick={() => setCount(c => c + jump)}>
        {
            icon
        }
    </button>
}


const Decrement = ({ icon, jump = 1 }) => {
    const { setCount } = useContext(CounterContext)

    return <button onClick={() => setCount(c => c - jump)}>
        {
            icon
        }
    </button>
}


CounterProvider.Label = Label;
CounterProvider.Count = Count;
CounterProvider.Increment = Increment;
CounterProvider.Decrement = Decrement;

export default CounterProvider