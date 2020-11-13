import React, { Component } from 'react';

class SearchBar extends Component{

    state = { term : ''};     

    handleFormSubmit(e){
        e.preventDefault();

        console.log(this.state.term)

        this.props.onSubmit(this.state.term);
    }


    render(){
        return(
        <div className='ui segment'>
            <form onSubmit={e => this.handleFormSubmit(e)} className='ui form'>
                <div className='field'>
                    <label>Ding Search !</label>
                    <input 
                        type='text' 
                        value={this.state.term}
                        onChange={e=>this.setState({term:e.target.value})}
                    />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;