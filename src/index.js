import React from 'react';
import ReactDOM from 'react-dom';

// Creata a new component.This component should produce some HTML
const App = () => {
    return <div>Hi!</div>;
}

// Take this component's genereted HTML and put it on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));