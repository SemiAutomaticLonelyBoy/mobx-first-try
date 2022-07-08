import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {configure} from "mobx";

configure({
    reactionScheduler: (f) => {
        setTimeout(f)
    }
})

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

