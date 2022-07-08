import './App.css';
import React from 'react';
import counter from "./store/counter";
import {observer} from "mobx-react-lite";
import Todo from "./Todo";



const App = observer(() => {

  return (
      <div>
        <div>
            {counter.total}
            <button className="btn" onClick={() => counter.increment()}>+</button>
            <button className="btn" onClick={() => counter.decrement()}>-</button>
        </div>
          <Todo/>
      </div>
  );
});

export default App;