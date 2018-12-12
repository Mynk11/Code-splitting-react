import React from 'react';
import logo from './logo.svg';


const Page2 = ({ onRouteChange }) => {
    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
            </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
            </a>
            </header>
            <button className="disabled">page 2</button>
            <button onClick={() => onRouteChange('Page1')}>page 1</button>
            <button onClick={() => onRouteChange('Page3')} >page 3</button>
        </div>
    );

}

export default Page2;