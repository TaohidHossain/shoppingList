import React from 'react';
import './App.css';
import {v4 as uuid} from "uuid";

import Shop from './components/shop'
import AddItem from './components/addItem'

class App extends React.Component {
  state = {
    items: [
      {
        id: uuid(),
        name: "Banana",
        amount: 2,
        isBought: false 
      },
      {
        id: uuid(),
        name: "Apple",
        amount: 2,
        isBought: false 
      },
      {
        id: uuid(),
        name: "Chocolate",
        amount: 2,
        isBought: true 
      },
      {
        id: uuid(),
        name: "Lemon",
        amount: 2,
        isBought: false 
      }
    ]
  }

  doneBuying = id => {
    this.setState({ 
      items: this.state.items.map(item => {
        if(item.id === id ){
          item.isBought = !item.isBought;
        }
        return item;
      })
    });
  };

  addItem = (name ) => {
    const addNew = {
      id: uuid(),
      name: name,
      amount: 2,
      isBought: false 
    }
    this.setState({ items : [...this.state.items, addNew ] })
  }
  
  render() {
    return (
        <div className="App container">
            <Shop items={ this.state.items }
            doneBuying={this.doneBuying} />
            <AddItem  addItem={ this.addItem } />
        </div>
    );
  }
}

export default App;
