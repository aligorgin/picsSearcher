import React from 'react';

class SearchBar extends React.Component {
    state = {term: ''};

    // we define arrow function to know what's 'this' is looking for and prevent the (un define state property )
    onSubmitForm = (e) => {
        e.preventDefault();
        // we look at our props object and called a function that was passed into thing as the onSubmit
        this.props.onSubmit(this.state.term)
    }

    render() {
        return (
            <div className='ui segment'>
                <form onSubmit={this.onSubmitForm} className='ui form'>
                    <div className='field'>
                        <label>search image</label>
                        <input type="text" value={this.state.term}
                               onChange={(e) => this.setState({term: e.target.value})}/>
                    </div>

                </form>
            </div>
        )
    }
}

export default SearchBar;