import React from "react";
import Cart from "./Cart";
import Navbar from './Navbar';
class App extends React.Component {
  constructor(){
    super();
    this.state = {
        products: [
            {
                price: 99,
                title: 'Watch',
                qty: 4,
                img: 'https://images.unsplash.com/photo-1524805444758-089113d48a6d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80',
                id: 1 
            },
            {
                price: 999,
                title: 'Phone',
                qty: 1,
                img: 'https://images.unsplash.com/photo-1520923642038-b4259acecbd7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=819&q=80',
                id: 2
            },
            {
                price: 999,
                title: 'Laptop',
                qty: 2,
                img: 'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1420&q=80',
                id: 3
            }
        ]
    }
    //this.increaseQantity = this.increaseQantity.bind(this);
}
handleIncreaseQuantity = (product) => {
    console.log('Hey please increae the qty of:',product)
    const {products} = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1
    this.setState({
        products
    })
}
handleDecreaseQuantity = (product) => {
    //console.log('Hey please decrease the qty of:',product)
    const {products} = this.state;
    const index = products.indexOf(product);
    if(products[index].qty === 0)
        return;
    products[index].qty -= 1
    this.setState({
        products
    })
}
handleDeleteProduct = (id) => {
    const {products} = this.state; 
    const items = products.filter((item) => item.id!==id);
    this.setState({
        products: items
    })
}

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count+=product.qty;
    });

    return count;
   }    

  getCartTotal = () => {
    const { products } = this.state;

    let cartTotal = 0;

    products.map((product) => {
      cartTotal = cartTotal + product.qty * product.price
    })
    return cartTotal;
  }

  render() {
    const { products } = this.state
    return (
      <div className="App">
        <Navbar
          count={this.getCartCount()}
        />
        <Cart
          products = {products}
          onIncreaseQuantity = {this.handleIncreaseQuantity}
          onDecreaseQuantity = {this.handleDecreaseQuantity}
          onDeleteProduct = {this.handleDeleteProduct}
        />
        <div style={{ padding: 10, fontSize: 20 }}>TOTAL: {this.getCartTotal()}</div>
      </div>
    );
  }
}

export default App;
