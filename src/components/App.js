import React from 'react';
import SearchBar from "./SearchBar";
import unsplash from "../api/unsplash";
import RenderImages from "./RenderImages";

class App extends React.Component {
    state = {images: []};

    //callback function
    onSearchSubmit = async (term) => {
        const respawn = await unsplash.get('/search/photos', {
            params: {query: term}
        })

        this.setState({images: respawn.data.results})
    }

    render() {
        return <div className='ui container' style={{marginTop: '10px'}}>
            <SearchBar onSubmit={this.onSearchSubmit}/>
            <RenderImages images={this.state.images}/>
        </div>
    }
}


export default App;