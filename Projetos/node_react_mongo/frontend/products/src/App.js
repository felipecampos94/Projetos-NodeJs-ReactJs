import React from 'react';
import './App.css';
import Routes from "./route";
import {store} from "./reducers/user";
import {Provider} from "react-redux";


function App() {
    return (
        <Provider store={store}>
            <div className="App">
                <Routes/>
            </div>
        </Provider>
    );
}

export default App;
