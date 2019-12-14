import React from 'react';

class AddForm extends React.Component {
    state = {
        content:""
    }
    
    handleChagne=(e)=>{
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        this.props.addTodo(this.state);
        this.setState({
            content:""
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label>Add todo</label>
                    <input type="text" onChange={this.handleChagne} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddForm;