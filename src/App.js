import React, { Component } from 'react';
import YTSearch from 'youtube-api-search';
import VideoList from './components/video_list';
import SearchBar from './components/search_bar';
import VideoDetail from './components/video_detail';
const API_KEY = 'AIzaSyCM-xLP9lTvHkCLFEs3H4ajYIGMfuLJOws';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText : '',
      videos: [],
      selectedVideo: null
    };
  }

  componentDidMount(){
    this.videoSearch();
  }

  videoSearch(searchterm) {
    YTSearch({ key: API_KEY, term: searchterm }, (data) => {
      console.log(data);
      this.setState({
        videos: data,
        selectedVideo: data[0]
      });
    });
  }


  render() {
    return (
      <div>
        <SearchBar onClick={()=>this.videoSearch(this.state.searchText)} onSearchTermChange={searchTerm => this.setState({searchText:searchTerm})} />
        <div>
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
          onVideoSelect={userSelected => this.setState({ selectedVideo: userSelected })}
          videos={this.state.videos} />
          </div>
      </div>
    );
  }
}

export default App;
