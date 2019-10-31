import React from "react";


class Product extends React.Component {
    render() {
        return (
            <div className="product">
                <img src={this.props.src} alt="Картинка" />
                <p>Название: <span>{this.props.name}</span> </p>
                <p>Цена за шт: <span>{this.props.cost}</span>р</p>
                <p>В наличии: <span>{this.props.amount}</span></p>
            </div>
        );
    }
}
export default Product;