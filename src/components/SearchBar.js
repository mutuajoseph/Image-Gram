import React, { Component } from 'react'

export class SearchBar extends Component {

    state = { term: ''}
    
    onFormSubmit = (e) => {
        e.preventDefault()
        this.props.onSubmit(this.state.term)
    }

    render() {

        return (
            <div className="ui segment" style={{ marginTop: '20px'}}>
                <h3 className="">Search</h3>
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="ui input field fluid">
                        <input 
                            type="text" 
                            value={this.state.term} 
                            placeholder="Enter name..." 
                            onChange={(e) => this.setState({ term: e.target.value})}
                        />
                    </div>
                </form>
            </div>
        )
    }
}

export default SearchBar;
