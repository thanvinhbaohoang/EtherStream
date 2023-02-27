
import React, { Component } from 'react';
import './css/youtubepage.css';

import debounce from 'lodash.debounce';
import SearchBar from './search-bar';
import youtubeSearch from './youtube-api';
import VideoList from './video_list';
import VideoDetail from './video_detail';

class YoutubePage extends Component {
  // here's what our constructor would look like
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    const search = (text) => {
      youtubeSearch(text).then((videos) => {
        this.setState({
          videos,
          selectedVideo: videos[0],
        });
      });
    };
    // in App constructor before you use this.search
    this.search = debounce(search, 500);
    search('pixar');
  }

  render() {
    return (
      <div>
        <div id="youtube-page">
        <SearchBar onSearchChange={this.search} />

        <div id="video-section">
          <VideoDetail video={this.state.selectedVideo} />
          <VideoList onVideoSelect={(selectedVideo) => this.setState({ selectedVideo })} videos={this.state.videos} />
        </div>
          </div>
      </div>
    );
  }
}

export default YoutubePage;
