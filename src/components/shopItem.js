import React from 'react';


class ShopItem extends React.Component{
    style = () => {
        return {
            textDecoration: this.props.item.isBought ? "line-through" : "none",
          };
    }
    render(){
        return(
            <div className="list" style={ this.style()}>
                <input type="checkBox"
                onChange={this.props.doneBuying.bind(this,this.props.item.id)}></input>
                <p className="ml-10">
                { this.props.item.name } </p>
                <p className="ml-10" >X</p>
                <p className="ml-10">
                { this.props.item.amount } </p>
            </div>
        )
    }
}

export default ShopItem;