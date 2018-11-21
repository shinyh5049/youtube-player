import React from 'react';

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state = { term: ''};
        this.onInputChange = this.onInputChange.bind(this);
    }
    onInputChange(event){
        this.setState({term : event.target.value});
        this.props.onSearchTermChange(event.target.value);
    }
    render() {
        return(
            <div className ="search-bar-wrapper">
                <input
                className ="search-bar" 
                value = {this.state.term}
                onChange = {this.onInputChange} />
            
        <button className="search-bar-button" onClick={()=>this.props.onClick()}>검색</button>
            </div>

        );
    }
}


export default SearchBar;