import React, { Component } from 'react';
import './App.css'


class AddItem extends Component {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(event) {
        event.preventDefault();
        
        this.props.onAdd(this.nameInput.value, this.priceInput.value);

        this.nameInput.value = '';
        this.priceInput.value = '';
    }

    render() {
        return (
            <form onSubmit={this.onSubmit}>
                <h3>Add product</h3>
                <label>Name</label>
                <input placeholder="Name"
                    ref={nameInput => this.nameInput = nameInput}/>
                <label>Price</label>
                <input placeholder="Price" 
                    ref={priceInput => this.priceInput = priceInput}
                />
                <button>Add</button>

                <hr />
            </form>
        )
    }
}

export default AddItem;