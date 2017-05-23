import React , { Component } from 'react';

// Search bar that uses youtube-api-search
class SearchBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      term: ''
    };
  }

  onInputChange(term) {
    this.setState({term})
    this.props.updateAppSearchTerm(term);
  }

  render() {
    return (
      <div className='search-bar'>
        <input
          value={this.state.term}
          onChange={event => this.onInputChange(event.target.value)}
        />
      </div>
    );
  }

}

export default SearchBar;
