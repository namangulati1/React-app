import React from 'react';
import CartItem from "./CartItem";
class Cart extends React.Component {
    constructor(){
        super();
        this.state = {
            products: [
                {
                    price: 9,
                    title: 'Watch',
                    qty: 4,
                    img: '',
                    id: 1 
                },
                {
                    price: 999,
                    title: 'Phone',
                    qty: 1,
                    img: '',
                    id: 2
                },
                {
                    price: 999,
                    title: 'Laptop',
                    qty: 2,
                    img: '',
                    id: 3
                }
            ]
        }
        //this.increaseQantity = this.increaseQantity.bind(this);
    }
    render() {
        const { products } = this.state;
        return(
            <div className='cart'>
            {products.map((product) => {
                return (
                    <CartItem 
                        product={product} 
                        key={product.id}/>
                )
            })}
            </div>
        )
    }
}

export default Cart;