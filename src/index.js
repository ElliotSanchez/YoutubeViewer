import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';
import ConfigSecrets from './config/config_secrets'; // not in git, still exposed client side



// Creating a new component that should produce some html
class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch("Surfboards");

  }

  videoSearch(term) {
    YTSearch({key: ConfigSecrets().yt_api_key, term: term}, (videos) => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    return (
      <div className='cell'>
        <SearchBar
          updateAppSearchTerm={term => this.videoSearch(term)}
        />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          updateAppStateSelectedVideo={selectedVideo => this.setState({selectedVideo})}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

// Put the components generated HTML in the DOM
ReactDOM.render(<App />, document.querySelector('.container'));
