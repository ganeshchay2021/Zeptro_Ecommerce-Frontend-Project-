import { createContext, useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

const CartContext = createContext(null);

export const CartProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [isLoaded, setIsLoaded] = useState(false); 

    // Load cart ONCE
    useEffect(() => {
        try {
            const storedCart = localStorage.getItem("cartItem");

            if (storedCart) {
                setCartItem(JSON.parse(storedCart));
            }
        } catch (error) {
            console.error("Error loading cart:", error);
        } finally {
            setIsLoaded(true);
        }
    }, []);

    // Save cart ONLY after initial loading is complete
    useEffect(() => {
        if (!isLoaded) return;

        localStorage.setItem(
            "cartItem",
            JSON.stringify(cartItem)
        );
    }, [cartItem, isLoaded]);


    const addToCart = (product) => {
        const itemInCart = cartItem.find((item) => item.id === product.id)
        if (itemInCart) {
            // Increase quantity if already in cart
            const updatedCart = cartItem.map((item) =>
                item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
            );
            setCartItem(updatedCart)
            toast.success("Product quantity increased..!")

        } else {
            //Add new ietm with quantity 1
            setCartItem([...cartItem, { ...product, quantity: 1 }]);
            toast.success("Product added to card..!")
        }
    }

    const updatedItemQuantity = (items, productId, actions) => {
        const updatedItem = items.map((item) => {
            if (item.id === productId) {
                let newQuantity = item.quantity;
                if (actions === "increase") {
                    newQuantity = newQuantity + 1;
                } else if (actions === "decrease") {
                    if (newQuantity > 1) {
                        newQuantity = newQuantity - 1;
                    } else {
                        toast.error("Quantity can't be less than 1");
                    }
                }
                return { ...item, quantity: newQuantity }
            } else {
                return item;
            }
        });
        setCartItem(updatedItem);
    }

    const deleteItem = (productId) => {
        setCartItem(cartItem.filter((item) => item.id !== productId));
        toast.success("Product deleted successfully..!");

    }


    return <CartContext.Provider value={{ cartItem, setCartItem, addToCart, updatedItemQuantity, deleteItem }}>
        {children}
    </CartContext.Provider>
}

export const useCart = () => useContext(CartContext);