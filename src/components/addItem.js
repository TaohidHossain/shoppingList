import React from 'react';



class AddItem extends React.Component{
    state = {
        name : ""
    }
    
    onSubmit = e => {
        e.preventDefault();
        this.props.addItem(this.state.name);
        this.setState({ name : '' })
    }
    onChange = e => {
        this.setState( {name : e.target.value })
    }
    
    render(){
        return(
            <div>
                <form className="list" onSubmit={this.onSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="ADD ITEM"
                        value={this.state.name}
                        onChange = {this.onChange}
                        style = {{width: '70%'}}
                    />
                    
                    <input 
                        type="submit"
                        value="Submit"
                    />

                </form>
            </div>
        );
    }
}

export default AddItem;