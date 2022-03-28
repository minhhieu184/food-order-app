import { createContext } from "react";

const cartContext = createContext({
    cart: [],
    addItem: (item) => {},
    removeItem: (id) => {},
    increaseAmount: (id) => {},
    decreaseAmount: (id) => {},
    reset: () => {}
})

export default cartContext










