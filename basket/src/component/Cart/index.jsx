import CartFooter from "../CartFooter";
import CartHeader from "../CartHeader";
import Product from "../Product";
import data from "./../../data"
import { useEffect, useState } from "react";

const Cart = () => {

    const [cart, setCart] = useState(data);
    const [total, setTotal] = useState({
        price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
        count: cart.reduce((prev, curr) => prev + curr.count, 0),
    });

    useEffect(() => {
        setTotal({
            price: cart.reduce((prev, curr) => prev + curr.priceTotal, 0),
            count: cart.reduce((prev, curr) => prev + curr.count, 0),
        })
    }, [cart]);

    const deliteProduct = (id) => {
        setCart((cart) => cart.filter((product) => id !== product.id));
    };

    const increase = (id) => {
        setCart((cart) => {
            return  cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: ++product.count,
                        priceTotal: product.count * product.price
                    };
                } else {
                    return product;
                }
            });
        });
    };

    const decrease = (id) => {
        setCart((cart) => {
            return  cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: product.count -1 > 1 ? product.count - 1 : 1,
                        priceTotal: (product.count -1 > 1 ? --product.count : 1) * product.price
                    };
                } else {
                    return product;
                }
            });
        });
    };

    const chengeValue = (id, value) => {
        setCart((cart) => {
            return cart.map((product) => {
                if (product.id === id) {
                    return {
                        ...product,
                        count: value,
                        priceTotal: value * product.price
                    };
                } else {
                    return product;
                }
            })
        })
    };

    const products = cart.map((product) => {
        return <Product 
            product={product} 
            key={product.id} 
            deliteProduct={deliteProduct} 
            increase={increase} 
            decrease={decrease} 
            chengeValue={chengeValue}
        />;
    });

	return ( 
		<section className="cart">
            <CartHeader />
            {products}
            <CartFooter total={total}/>
        </section>
	);
};
 
export default Cart; 