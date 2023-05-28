import React from 'react';

class CartItem extends React.Component {
    constructor(){
        super();
        this.state = {
            price: 999,
            title: 'Phone',
            qty: 1,
            img: '' 
        }
        //this.increaseQantity = this.increaseQantity.bind(this);
    }
    increaseQantity = () => {
        // this.state.qty+=1;
        //console.log('this',this.state);
        //form 1 of set state
        // this.setState({
        //     qty: this.state.qty + 1
        // });
        //second form of set state
        this.setState((prevState) => {
            return {
                qty: prevState.qty+1
            }
        });
    }
    render () {
        const { price, title, qty } = this.state;
        return (
            <div className='cart-item'>
                <div className='left-block'>
                    <img style={styles.image}/>
                </div>
                <div className='right-block'>
                <div style={ {fontSize: 25} } >{title}</div>
                <div style={ {color: '#777'} } >Rs {price}</div>
                <div style={ {color: '#777'} } >Qty: {qty}</div>
                <div className='cart-item-actions'>
                    {/* Buttons */}
                <img 
                    alt='increase' 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/128/1828/1828926.png' 
                    onClick={this.increaseQantity}
                />
                <img 
                    alt='decrease' 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/128/992/992683.png'
                />
                <img 
                    alt='delete' 
                    className='action-icons' 
                    src='https://cdn-icons-png.flaticon.com/128/3405/3405244.png' 
                />
                </div>
                </div>
            </div>
        );
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}

export default CartItem;