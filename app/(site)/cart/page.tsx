import Link from "next/link";

const Cart = () => {
    return (
        <>
            <div className="container">
                <div className="cart-header">
                    <h1>Your Cart</h1>
                </div>
                <div className="cart-items">
                    <div className="cart-item">
                        <img src="https://via.placeholder.com/80" alt="Product Image"/>
                        <div className="item-details">
                            <h3>Product Name</h3>
                            <p>Price: $20.00</p>
                        </div>
                        <div className="item-actions">
                            <input type="number" defaultValue="1" min="1"/>
                        </div>
                    </div>
                    <div className="cart-item">
                        <img src="https://via.placeholder.com/80" alt="Product Image"/>
                        <div className="item-details">
                            <h3>Another Product</h3>
                            <p>Price: $15.00</p>
                        </div>
                        <div className="item-actions">
                            <input type="number" defaultValue="2" min="1"/>
                        </div>
                    </div>
                </div>
                <div className="total">
                    Total: $50.00
                </div>
                <Link href="checkout" className="btn checkout-btn">Proceed to Checkout</Link>
            </div>
        </>
    );
};

export default Cart;
