import React from 'react';

import ShopItem from './shopItem'

class Shop extends React.Component {
    render() {
        return (
        this.props.items.map((item)=>(
            <ShopItem key={item.id}
             item={item}
            doneBuying={this.props.doneBuying} className="list"/>
            ))
        );
    }
}

export default Shop;
