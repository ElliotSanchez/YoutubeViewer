// import React
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import ConfigSecrets from './config/config_secrets';

// Creating a new component that should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = { videos: [] };
    const api_key = ConfigSecrets().yt_api_key;

    YTSearch({key: api_key, term: 'surfboards'}, (videos) => {
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

// Put the components generated HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
