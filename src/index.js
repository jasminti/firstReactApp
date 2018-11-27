import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
const API_KEY = 'AIzaSyDMDaHa-qVPJY4W6KLb7yxU01U40o5uvFk';

// Creata a new component.This component should produce some HTML
class App extends Component {
    constructor (props) {
        super(props);

        this.state = { videos: [] };

        YTSearch({ key: API_KEY, term: 'surfboards'}, (videos) => {
            this.setState({ videos });
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

// Take this component's genereted HTML and put it on the page (in the DOM) 
ReactDOM.render(<App />, document.querySelector('.container'));