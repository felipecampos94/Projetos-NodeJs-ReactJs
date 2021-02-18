import React from 'react';
import Routes from "./routes";
import MenuBar from './components/menu/menu';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';

function App() {
    return (
        <div className="App">
            <MenuBar/>
            <Routes/>
        </div>
    );
}

export default App;
