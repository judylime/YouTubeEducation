import React, { Component } from 'react';

class AddNinja extends Component {
    state={
        name: null,
        age:null,
        belt:null
    }

    handleChagne =(e)=>{
        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit = (e)=>{
        e.preventDefault();//get default data
        //lock data
        //console.log(this.state);
        //take object send in to this function, get the state of current compoent
        //call fater funtion to set father state
        this.props.addNinja(this.state);
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" onChange={this.handleChagne}/>
                    <label htmlFor="age">age:</label>
                    <input type="text" id="age" onChange={this.handleChagne}/>
                    <label htmlFor="belt">belt:</label>
                    <input type="text" id="belt" onChange={this.handleChagne}/>
                    <button>Submit</button>
                </form>
            </div>
        );
    }
}

export default AddNinja;