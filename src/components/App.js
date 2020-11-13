import React, { Component } from 'react';
import unsplash from '../api/unsplash';
import SearchBar from './SearchBar';


class App extends Component{

    state = { images : [] };
     

   handleSearchSubmit = async (term) =>{
    const response = await unsplash.get('/search/photos',{
           params:{query: term},
       })
       console.log(this);
       this.setState({images: response.data.results});
    }


    render(){
        return(
            <div className='ui container' style={{marginTop:'10px'}}> 
                <SearchBar onSubmit={this.handleSearchSubmit}/>
                <p>Found {this.state.images.length} images</p>
            </div>
        ); 
    }
}

export default App;




// xBplbekh4bjJsETC8VHDcndN2J592BL5_X8tNc6b1HI