import { useContext } from "react";

import cartContext from "../store/cart-context";

const useCart = () => useContext(cartContext)

export default useCart

