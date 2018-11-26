import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyDMDaHa-qVPJY4W6KLb7yxU01U40o5uvFk';

// Creata a new component.This component should produce some HTML
const App = () => {
    return (
        <div>
            <SearchBar />
        </div>
    );
}

// Take this component's genereted HTML and put it on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));